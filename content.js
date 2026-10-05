/* ═══════════════════════════════════════════════════════════════════════
   content.js — EL TEU CONTINGUT PÚBLIC viu aquí.
   Aquest és l'ÚNIC fitxer que has d'editar per afegir o canviar entrades.
   (Les entrades XIFRADES van a secrets.js; aquí va tot el que és públic.)
   ───────────────────────────────────────────────────────────────────────

   COM AFEGIR UNA ENTRADA NOVA
   1. Copia un bloc { … } sencer d'una entrada existent (amb la coma final).
   2. Enganxa'l dins la llista que toqui (journal, projects o books).
   3. Canvia els textos. Cada camp té dos idiomes:  { ca: "català", en: "english" }
   4. Posa un "slug" únic en anglès → serà l'enllaç: tafi.cat/#journal/EL-TEU-SLUG
      (només lletres minúscules, números i guions; sense espais ni accents)
   5. Desa, puja content.js al repo. Fet.

   REGLES RÀPIDES
   · No esborris les comes ni les cometes "".
   · El text més nou va A DALT de la llista (apareix primer a la web).
   · A "body" pots fer servir línies en blanc per separar paràgrafs.
   · Si deixes "excerpt" buit, s'agafa l'inici del "body".
   ═══════════════════════════════════════════════════════════════════════ */

window.TAFI_CONTENT = {

  /* ── DIARI / JOURNAL ─────────────────────────────────────────────────
     Camps: slug · date · tag · title · excerpt (resum a la llista) · body (pàgina) */
  journal: [
    {
      slug: "deciding-awake",
      date: "2026 · 10 · 05",
      tag: {"ca":"Ara, això","en":"Now, this"},
      title: {"ca":"Sobre decidir despert","en":"On deciding awake"},
      excerpt: {"ca":"Tres mesos després: em vaig quedar. Feina nova, la mateixa empresa, i una llista d'objectius per als pròxims sis mesos.","en":"Three months later: I stayed. A new role at the same company, and a list of goals for the next six months."},
      body: {"ca":"A l'última entrada em preguntava «i ara què?». Deia que aquesta vegada la decisió tocava prendre-la despert, no en automàtic. Han passat tres mesos i aquí va l'actualització: em vaig quedar. Després de tot el que vaig escriure sobre deixar-ho, vaig acceptar l'oferta de l'empresa on feia les pràctiques.\n\nJa fa uns tres mesos que hi treballo com a Junior. La feina és la mateixa, però ara la sento més meva: tinc més control i més responsabilitat. Estic en molts projectes alhora, i en alguns m'encarrego de tot el procés de principi a fi. Això és el que més m'agrada, perquè veus com una cosa passa de ser una idea a estar acabada, i saps que hi has tingut alguna cosa a veure.\n\nEl que no m'esperava era una altra cosa. Pensava que, en un entorn de gent adulta, preparada i amb experiència, les dinàmiques serien diferents. I no sempre ho són. Hi ha moments que semblen de primària: gent que no fa el que se li demana encara que sigui senzill, gent que no sap treballar en equip, coses que s'haurien de resoldre amb un missatge i acaben sent un problema. Ser adult no et fa saber treballar amb els altres. Suposo que és una habilitat que també s'ha d'aprendre, i que no tothom ho ha fet.\n\nAmb la feina més o menys encarrilada, m'he posat amb la segona part del que deia a l'altra entrada: definir objectius i traçar un roadmap. M'he marcat objectius per als pròxims sis mesos. He fet una llista llarga, i ja sé que no la compliré sencera:\n\n— Anar al gimnàs de manera regular i posar-me fort.\n— Començar a fer boxa. Ja m'he comprat un protector bucal fet a mida, així que ara ja no hi ha excusa.\n— Treure'm el C1 d'anglès.\n— Començar a familiaritzar-me amb el francès.\n— Llegir més. Aquest ja l'he començat.\n— Començar a estudiar per a l'examen d'una acreditació financera.\n\nNo espero complir-los tots. La idea és tenir una direcció, no una checklist. Si d'aquí a sis mesos n'he fet la meitat i bé, estaré content.\n\nI ara què? Ara, això.","en":"In my last entry I asked myself «and now what?». I said that this time the decision had to be made awake, not on autopilot. Three months have passed and here's the update: I stayed. After everything I wrote about leaving, I accepted the offer from the company where I did my internship.\n\nI've been working there as a Junior for about three months now. The job is the same, but now it feels more mine: I have more control and more responsibility. I'm on lots of projects at once, and on some of them I handle the whole process from start to finish. That's what I like most, because you see something go from an idea to finished, and you know you had something to do with it.\n\nWhat I didn't expect was something else. I thought that, in an environment of grown-up, qualified, experienced people, the dynamics would be different. And they aren't always. There are moments that feel like primary school: people who don't do what they're asked even when it's simple, people who don't know how to work in a team, things that should be solved with one message and end up becoming a problem. Being an adult doesn't make you good at working with others. I guess it's a skill that also has to be learned, and not everyone has.\n\nWith work more or less on track, I've moved on to the second part of what I said in the last entry: defining goals and mapping out a roadmap. I've set myself goals for the next six months. I made a long list, and I already know I won't finish all of it:\n\n— Go to the gym regularly and get strong.\n— Start boxing. I've already bought a custom-made mouthguard, so now there's no excuse.\n— Get my C1 in English.\n— Start getting familiar with French.\n— Read more. I've already started on this one.\n— Start studying for a financial certification exam.\n\nI don't expect to hit them all. The idea is to have a direction, not a checklist. If in six months I've done half of them, and done them well, I'll be happy.\n\nAnd now what? Now, this."}
    },
    {
      slug: "risk-you-cant-see",
      date: "2026 · 06 · 28",
      tag:     { ca: "I ara què?", en: "So what now?" },
      title:   { ca: "Sobre el risc que no es veu", en: "On the risk you can't see" },
      excerpt: { ca: "El risc real poques vegades surt als gràfics. Notes sobre cues, liquiditat i paciència.",
                 en: "Real risk rarely shows on the charts. Notes on tails, liquidity, and patience." },
      body: { ca: "Durant el meu dia a dia no acostumo a pensar cap a on vaig, quin objectiu final té allò que estic fent. Ve predefinit per una decisió que es va prendre fa X temps i que, un cop marcada, l'ideal és no replantejar-la i actuar de manera automàtica. L'última decisió que vaig prendre va ser quina carrera estudiar. Un cop vaig entrar a Economia, en una universitat que no cal esmentar, he estat 4 anys on el meu objectiu final era acabar el grau. Pel camí hi ha hagut subobjectius: intentar passar-ho bé, aconseguir una universitat per anar d'Erasmus, fer pràctiques d'empresa. Però l'objectiu seguia sent el mateix: que, passats 4 anys, tingués els 240 crèdits que acrediten que he assolit una formació, que tinc cert coneixement tècnic i una capacitat per tirar les coses endavant.\n\nOficialment ja m'he graduat d'Economia, però tinc la sensació de «i ara què m'espera?». Quina és la decisió correcta, el següent step? Tinc bastantes opcions però no sé què fer. A les pràctiques m'han fet oferta, però paguen molt poc i tinc por d'acabar en una posició que no m'agrada, estancat. Trobar una alternativa tampoc és una tasca gaire senzilla: tota la part de banca d'inversió és molt competitiva i no és fàcil entrar-hi. I la part de marxar fora, que abans tenia molt clara, ara la torno a posar sobre la taula. És el moment per fer-ho, perquè els lligams amb un lloc concret són els més dèbils que tindré mai: no tinc persones que depenguin de mi, no tinc cap feina que em faci de limitant, no tinc cap propietat. A més, aquests primers anys poden ser els més crítics a nivell inicial.\n\nPer una banda em sap greu deixar el que he estat fent a l'empresa de pràctiques i deixar enrere l'equip de persones. Però és que no em compensa, i estic pensant de deixar-ho i fer-me un últim estiu tranquil, de vacances.\n\nI ara què? Suposo que aquesta vegada la decisió toca prendre-la despert, no en automàtic. He de definir quin és el següent objectiu i traçar un roadmap per arribar-hi.",
               en: "In my day-to-day life, I don't usually think about where I'm going or what the ultimate goal is of what I'm doing. It's predefined by a decision that was made a while ago, and once it's made, the ideal is not to rethink it and just act automatically. The last decision I made was which degree to study. Once I got into Economics, at a university that needs no mention, I spent 4 years whose ultimate goal was to finish the degree. Along the way there were sub-goals: trying to enjoy it, landing a university for an Erasmus exchange, doing a company internship. But the goal stayed the same: that after 4 years I'd have the 240 credits certifying I'd completed an education, that I have certain technical knowledge and the ability to get things done.\n\nI've officially graduated in Economics, but I have this feeling of «and now what awaits me?». What's the right decision, the next step? I have quite a few options but I don't know what to do. My internship made me an offer, but it pays very little and I'm afraid of ending up in a position I don't like, stuck. Finding an alternative isn't easy either: the whole investment-banking side is very competitive and hard to get into. And moving abroad, which I used to be so sure about, is back on the table. This is the moment to do it, because my ties to any one place are the weakest they'll ever be: no one depends on me, no job holds me back, I own no property. Besides, these first years may be the most critical at the start.\n\nOn one hand it pains me to leave what I've been doing at the internship and the team behind. But it just isn't worth it to me, and I'm thinking of quitting and giving myself one last quiet summer, on holiday.\n\nAnd now what? I guess this time the decision has to be made awake, not on autopilot. I have to define what the next goal is and map out a roadmap to reach it." }
    }
  ],

  /* ── PROJECTES / PROJECTS ────────────────────────────────────────────
     Camps: slug · status (estat) · title · excerpt (resum a la targeta) · body (pàgina) */
  projects: [
    {
      slug: "proteus",
      status:  {"ca":"En desenvolupament","en":"In development"},
      title:   {"ca":"PROTEUS","en":"PROTEUS"},
      excerpt: {"ca":"Canvia de forma per a cada porta que toca.","en":"Shapeshifts for every door it knocks on."},
      body:    {"ca":"","en":""}
    },
    {
      slug: "caronte",
      status:  {"ca":"En desenvolupament","en":"In development"},
      title:   {"ca":"CARONTE","en":"CARONTE"},
      excerpt: {"ca":"Tot creua la frontera. Ningú paga de més.","en":"Everything crosses. No one overpays."},
      body:    {"ca":"","en":""}
    },
    {
      slug: "argos",
      status:  {"ca":"En desenvolupament","en":"In development"},
      title:   {"ca":"ARGOS","en":"ARGOS"},
      excerpt: {"ca":"Cent ulls. Cap rostre fals.","en":"A hundred eyes. No false faces."},
      body:    {"ca":"","en":""}
    },
    {
      slug: "olimpo",
      status:  {"ca":"Beta","en":"Beta"},
      title:   {"ca":"OLIMPO","en":"OLIMPO"},
      excerpt: {"ca":"On habiten els déus.","en":"Where the gods reside."},
      body:    {"ca":"","en":""}
    }
  ],

  /* ── LLIBRES / BOOKS ──────────────────────────────────────────────────
     Camps: slug · category · status · title · author · note (la teva opinió, opcional)
     Aquests són EXEMPLES — canvia'ls pels teus llibres reals. */
  books: [
    {
      slug: "si-tu-em-dius-vine",
      category: { ca: "Novel·la", en: "Novel" },
      status:   { ca: "Llegit", en: "Read" },
      title:    { ca: "Si tu em dius vine ho deixo tot… però digue'm vine", en: "Si tu em dius vine ho deixo tot… però digue'm vine" },
      author:   { ca: "Albert Espinosa", en: "Albert Espinosa" },
      note:     { ca: "", en: "" }
    },
    {
      slug: "secrets-of-sand-hill-road",
      category: { ca: "Negocis", en: "Business" },
      status:   { ca: "Llegint", en: "Reading" },
      title:    { ca: "Secrets of Sand Hill Road: Venture Capital and How to Get It", en: "Secrets of Sand Hill Road: Venture Capital and How to Get It" },
      author:   { ca: "Scott Kupor", en: "Scott Kupor" },
      note:     { ca: "", en: "" }
    }
  ],

  /* ── ACTUALITZACIONS / UPDATES ───────────────────────────────────────
     Actualitzacions de la teva vida i del projecte. Línia de temps.
     Camps: date · title (titular curt) · body (text; línies en blanc = paràgrafs)
     El més NOU va a dalt. */
  updates: [
    {
      date: "2026 · 06",
      title: { ca: "I ara què?", en: "So what now?" },
      body:  { ca: "tafi.cat ja és oficialment casa meva a internet.",
               en: "tafi.cat is now officially my home on the internet." } 
    },
    {
      date: "2025 · 11",
      title: { ca: "Domini propi", en: "My own domain" },
      body:  { ca: "tafi.cat ja és oficialment casa meva a internet.",
               en: "tafi.cat is now officially my home on the internet." }
    },
    {
      date: "2024 · 03",
      title: { ca: "El primer diari", en: "The first journal" },
      body:  { ca: "Vaig publicar les primeres notes en obert. L'inici de tot això.",
               en: "Published my first notes in the open. The start of all this." }
    }
  ]

};
