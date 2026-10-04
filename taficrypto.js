/* TafiCrypto — real client-side encryption for static hosting.
   AES-GCM content key, wrapped by one or more PBKDF2-derived password keys.
   A blob can be unlocked by ANY of the passwords it was wrapped with
   (e.g. a per-section password OR a master password).
   Requires a secure context (https) — works on tafi.cat, not on file://. */
(function () {
  const te = new TextEncoder();
  const td = new TextDecoder();
  const ITER = 200000;

  function b64(buf) {
    const b = new Uint8Array(buf); let s = "";
    for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    return btoa(s);
  }
  function ub64(str) {
    const s = atob(str); const b = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
    return b;
  }
  async function deriveKey(password, salt) {
    const base = await crypto.subtle.importKey("raw", te.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: salt, iterations: ITER, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
    );
  }

  // encrypt(plaintextString, ["sectionPwd","masterPwd"]) -> blob object
  async function encrypt(plaintext, passwords) {
    const cek = crypto.getRandomValues(new Uint8Array(32));
    const cekKey = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, cekKey, te.encode(plaintext));
    const wraps = [];
    for (const p of passwords) {
      if (!p) continue;
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const wiv = crypto.getRandomValues(new Uint8Array(12));
      const wk = await deriveKey(p, salt);
      const wct = await crypto.subtle.encrypt({ name: "AES-GCM", iv: wiv }, wk, cek);
      wraps.push({ salt: b64(salt), iv: b64(wiv), ct: b64(wct) });
    }
    return { v: 1, enc: { iv: b64(iv), ct: b64(ct) }, wraps: wraps };
  }

  // unlock(blob, password) -> plaintext string, or null if password is wrong
  async function unlock(blob, password) {
    if (!blob || !blob.wraps) return null;
    for (const w of blob.wraps) {
      try {
        const wk = await deriveKey(password, ub64(w.salt));
        const cek = await crypto.subtle.decrypt({ name: "AES-GCM", iv: ub64(w.iv) }, wk, ub64(w.ct));
        const cekKey = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
        const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: ub64(blob.enc.iv) }, cekKey, ub64(blob.enc.ct));
        return td.decode(pt);
      } catch (e) { /* wrong password for this wrap — try the next */ }
    }
    return null;
  }

  window.TafiCrypto = { encrypt: encrypt, unlock: unlock, supported: !!(window.crypto && crypto.subtle) };
})();