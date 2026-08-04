/*
 * Know Your Rights - WA
 * General legal information for Western Australia. Not legal advice.
 * All referenced legislation is publicly available at legislation.wa.gov.au
 */

const FIRM = {
  name: "Slee Anderson & Pidgeon Lawyers",
  site: "https://www.sleeanderson.com.au",
  contact: "https://www.sleeanderson.com.au/contact",
};

const LAW_LINKS = {
  cia: {
    name: "Criminal Investigation Act 2006 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_48864.htm/$FILE/Criminal%20Investigation%20Act%202006%20-%20%5B04-e0-00%5D.html?OpenElement",
  },
  ciipa: {
    name: "Criminal Investigation (Identifying People) Act 2002 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_49138.htm/$FILE/Criminal%20Investigation%20(Identifying%20People)%20Act%202002%20-%20%5B04-r0-00%5D.html?OpenElement",
  },
  code: {
    name: "Criminal Code (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_49336.htm/$FILE/Criminal%20Code%20Act%20Compilation%20Act%201913%20-%20%5B19-aq0-00%5D.html?OpenElement",
  },
  rta: {
    name: "Road Traffic Act 1974 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_48198.htm/$FILE/Road%20Traffic%20Act%201974%20-%20%5B14-t0-00%5D.html?OpenElement",
  },
  rtaa: {
    name: "Road Traffic (Administration) Act 2008 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_48196.htm/$FILE/Road%20Traffic%20(Administration)%20Act%202008%20-%20%5B02-m0-00%5D.html?OpenElement",
  },
  moda: {
    name: "Misuse of Drugs Act 1981 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_49366.htm/$FILE/Misuse%20Of%20Drugs%20Act%201981%20-%20%5B08-i0-00%5D.html?OpenElement",
  },
  weapons: {
    name: "Weapons Act 1999 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_48364.htm/$FILE/Weapons%20Act%201999%20-%20%5B01-h0-00%5D.html?OpenElement",
  },
  sda: {
    name: "Surveillance Devices Act 1998 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_45890.htm/$FILE/Surveillance%20Devices%20Act%201998%20-%20%5B02-g0-00%5D.html?OpenElement",
  },
  yoa: {
    name: "Young Offenders Act 1994 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_49140.htm/$FILE/Young%20Offenders%20Act%201994%20-%20%5B07-w0-00%5D.html?OpenElement",
  },
  bail: {
    name: "Bail Act 1982 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_48089.htm/$FILE/Bail%20Act%201982%20-%20%5B09-z0-00%5D.html?OpenElement",
  },
  liquor: {
    name: "Liquor Control Act 1988 (WA)",
    url: "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/mrdoc_49727.htm/$FILE/Liquor%20Control%20Act%201988%20-%20%5B08-y0-00%5D.html?OpenElement",
  },
};

const SCENARIOS = [
  {
    id: "right-to-silence",
    title: "Right to Silence",
    icon: "🔇",
    essential: true,
    summary:
      "You do not have to answer police questions except to provide your personal details (name, date of birth and address) when lawfully required to do so.",
    sections: [
      {
        heading: "The general rule",
        body:
          "In Western Australia you have a general right to silence. You do not have to answer police questions, take part in an interview, or make a statement. Anything you do say may be used as evidence. It is usually best to politely say: “I don’t wish to answer any questions until I’ve spoken to a lawyer.”",
      },
      {
        heading: "The main exception — your personal details",
        body:
          "Under the Criminal Investigation (Identifying People) Act 2002, a police officer can require you to give your name, date of birth and address if the officer reasonably suspects you have committed, are committing or are about to commit an offence, or that you may be able to help investigate an offence. Refusing to comply, or giving false details, is an offence.",
      },
      {
        heading: "Drivers and other specific situations",
        body:
          "If you are driving, road traffic laws require you to identify yourself, produce your licence on request, and identify who was driving your vehicle at a particular time. Other laws (for example liquor and public transport laws) can also require you to give your details in specific situations.",
      },
      {
        heading: "Silence cannot be used against you",
        body:
          "In WA, staying silent (beyond lawfully required details) is not an offence and generally cannot be used as evidence of guilt. Never lie to police — giving false information is an offence; saying nothing is not.",
      },
    ],
    laws: ["ciipa", "cia", "rtaa"],
  },
  {
    id: "stopped-questioned",
    title: "Being Stopped & Questioned",
    icon: "🚶",
    summary:
      "Police can approach and talk to anyone, but you only have to stay or answer in limited situations.",
    sections: [
      {
        heading: "Can I walk away?",
        body:
          "Police can talk to you at any time, but unless you are under arrest, being detained for a search, or subject to a specific legal requirement (like giving your details), you are generally free to leave. You can ask: “Am I under arrest? Am I free to go?” If you are not detained, you may calmly walk away.",
      },
      {
        heading: "When you must give your details",
        body:
          "You must give your name, date of birth and address if police lawfully require them under the Criminal Investigation (Identifying People) Act 2002 — for example, where they reasonably suspect you of an offence or believe you can assist an investigation. You can ask the officer why they are asking. The officer must, on request, identify themselves and their rank and station.",
      },
      {
        heading: "What you don’t have to do",
        body:
          "Beyond your details in those situations, you do not have to answer questions about where you’re going, what you’ve been doing, or anything about an alleged offence. You do not have to attend a police station unless you are arrested, and you do not have to hand over your phone just because you are asked.",
      },
      {
        heading: "Stay calm and keep records",
        body:
          "Be polite, keep your hands visible, and don’t physically resist — obstructing police is an offence under section 172 of the Criminal Code (WA). Note the officers’ names, the time and place, and write down what happened as soon as you can.",
      },
    ],
    laws: ["ciipa", "code", "cia"],
  },
  {
    id: "vehicle-stops",
    title: "Vehicle Stops & Traffic",
    icon: "🚗",
    summary:
      "You must stop when directed, provide your licence and details, and comply with alcohol and drug testing.",
    sections: [
      {
        heading: "Stopping and licence checks",
        body:
          "If police signal you to stop while driving, you must stop. Road traffic law requires drivers to produce their driver’s licence when asked and to give their name and address. The registered owner of a vehicle can also be required to say who was driving it at a particular time.",
      },
      {
        heading: "Breath and drug testing",
        body:
          "Police can require a random preliminary breath test or oral fluid (drug) test from any driver — no suspicion is needed. Refusing a lawful test is an offence with penalties similar to failing it.",
      },
      {
        heading: "Vehicle searches",
        body:
          "Police may search your vehicle without a warrant if they reasonably suspect it contains things like drugs, weapons or stolen property, under the Criminal Investigation Act 2006 and the Misuse of Drugs Act 1981. You can say you do not consent to a search, but do not physically interfere — raise any dispute later.",
      },
      {
        heading: "Passengers",
        body:
          "Passengers generally only need to give their details if police lawfully require them (for example, on reasonable suspicion of an offence). Passengers do not have to answer other questions.",
      },
    ],
    laws: ["rta", "rtaa", "cia", "moda"],
  },
  {
    id: "searches",
    title: "Searches of You & Your Property",
    icon: "🔍",
    summary:
      "Most searches without a warrant require reasonable suspicion. Strip searches have strict extra rules.",
    sections: [
      {
        heading: "When police can search you without a warrant",
        body:
          "Under the Criminal Investigation Act 2006 and other laws such as the Misuse of Drugs Act 1981 and Weapons Act 1999, police can stop and search you or your belongings without a warrant if they reasonably suspect you have drugs, weapons, stolen goods or evidence of an offence. ‘Reasonable suspicion’ must be based on real facts — not just your age, race or appearance.",
      },
      {
        heading: "Basic searches vs strip searches",
        body:
          "The Criminal Investigation Act 2006 distinguishes a ‘basic search’ (pat-down, outer clothing, pockets, bags, scanning devices) from a ‘strip search’. Strip searches are more intrusive and have strict rules: they should be conducted privately, by an officer of the same sex where practicable, and go no further than reasonably necessary.",
      },
      {
        heading: "Consent searches",
        body:
          "Police may ask for your consent to search when they have no power to force one. You can refuse consent — clearly say “I do not consent to this search.” If police search anyway, do not resist physically; your objection can be raised with a lawyer or in court later.",
      },
      {
        heading: "Sniffer dogs and drug searches",
        body:
          "A drug detection dog indication may contribute to an officer’s reasonable suspicion under the Misuse of Drugs Act 1981. If you are searched, you can ask what power the search is being done under and note the details afterwards.",
      },
    ],
    laws: ["cia", "moda", "weapons"],
  },
  {
    id: "arrest",
    title: "Being Arrested",
    icon: "⛓️",
    summary:
      "Police can arrest you without a warrant if they reasonably suspect you have committed an offence. You have important rights once arrested.",
    sections: [
      {
        heading: "When police can arrest you",
        body:
          "Under section 128 of the Criminal Investigation Act 2006, police can arrest you without a warrant if they reasonably suspect you have committed, are committing, or are about to commit certain offences. Police must tell you that you are under arrest and why. Ask: “Am I under arrest? What for?”",
      },
      {
        heading: "Your rights after arrest",
        body:
          "As an arrested suspect you have rights under the Criminal Investigation Act 2006, including: to be told why you’re arrested; to a reasonable opportunity to contact a lawyer, and a relative or friend; to an interpreter if you need one; and to reasonable medical care. Use them — ask to call a lawyer before answering anything.",
      },
      {
        heading: "How long you can be held",
        body:
          "After arrest, police can detain you for a limited period (generally up to 6 hours, extendable by senior officer approval) to investigate before they must charge and bail you, release you, or bring you before a court. You then have rights under the Bail Act 1982 to have bail considered.",
      },
      {
        heading: "Reasonable force and resisting",
        body:
          "Police may use reasonable force to arrest you. Do not resist, even if you believe the arrest is wrong — resisting or obstructing police is an offence. Comply, say you do not agree, and challenge it later with legal help.",
      },
    ],
    laws: ["cia", "bail", "code"],
  },
  {
    id: "police-interview",
    title: "Police Interviews",
    icon: "🎙️",
    summary:
      "You do not have to take part in an interview. Speak to a lawyer first — always.",
    sections: [
      {
        heading: "You can decline the interview",
        body:
          "Whether you’re a suspect or just ‘helping with enquiries’, you do not have to answer interview questions. Apart from lawfully required personal details, you may answer every question with “no comment”. This cannot be used as evidence of guilt.",
      },
      {
        heading: "The caution",
        body:
          "Before interviewing you as a suspect, police should caution you that you are not obliged to say anything and that anything you say may be used in evidence. If you don’t understand the caution, say so.",
      },
      {
        heading: "Recording",
        body:
          "Under the Criminal Investigation Act 2006, interviews with suspects about serious offences must generally be audiovisually recorded for any admission to be usable in court. You are entitled to ask for a copy of the recording of your interview.",
      },
      {
        heading: "Get legal advice first",
        body:
          "Before any interview, get legal advice — contact Slee Anderson & Pidgeon Lawyers, or for free assistance Legal Aid WA (1300 650 579) or, for Aboriginal and Torres Strait Islander people, the Aboriginal Legal Service of WA (1800 019 900). Saying “I want to speak to a lawyer before answering questions” is always reasonable.",
      },
    ],
    laws: ["cia"],
  },
  {
    id: "move-on",
    title: "Move-On Orders",
    icon: "🚫",
    summary:
      "Police can order you to leave a public place for up to 24 hours in certain circumstances. Disobeying is an offence.",
    sections: [
      {
        heading: "What a move-on order is",
        body:
          "Under section 27 of the Criminal Investigation Act 2006, police can order a person in a public place to move on — to leave the place and not return for up to 24 hours — if the officer reasonably suspects the person is doing, or is about to do, an act involving violence, a breach of the peace, or that they are obstructing others, or committing an offence.",
      },
      {
        heading: "What police must tell you",
        body:
          "The order should specify the area you must leave and how long the order lasts. You can ask the officer to clarify the area and duration, and ask for the officer’s details. Ask: “What area does this cover, and for how long?”",
      },
      {
        heading: "If you disobey",
        body:
          "Failing to comply with a move-on order without a reasonable excuse is an offence and you may be arrested. If you believe the order was unfair, comply first and complain or seek legal advice afterwards.",
      },
    ],
    laws: ["cia", "code"],
  },
  {
    id: "police-home",
    title: "Police at Your Home",
    icon: "🏠",
    summary:
      "Police generally need a warrant, your consent, or a specific emergency power to enter your home.",
    sections: [
      {
        heading: "You can ask why they’re there",
        body:
          "If police knock, you don’t have to open the door or let them in unless they have a warrant or a specific legal power. Ask (through the door if you prefer): “Do you have a warrant? What power are you relying on to enter?”",
      },
      {
        heading: "Entry with a warrant",
        body:
          "If police have a search warrant, ask to see it. Check the address and what it authorises. You must not obstruct a lawful warrant search, but you don’t have to answer questions during it. You are entitled to know what was seized.",
      },
      {
        heading: "Entry without a warrant",
        body:
          "The Criminal Investigation Act 2006 gives police limited powers to enter without a warrant — for example to prevent violence or a breach of the peace, to arrest someone they reasonably suspect is there, in emergencies, or in fresh pursuit. Outside those powers, they need your consent.",
      },
      {
        heading: "Consent can be refused or withdrawn",
        body:
          "If police ask to ‘come in for a chat’, you can say no, or talk outside. If you let them in, you can ask them to leave at any time, and they must go unless a legal power applies. Say clearly: “I do not consent to you entering/searching.”",
      },
    ],
    laws: ["cia"],
  },
  {
    id: "filming-police",
    title: "Filming & Recording Police",
    icon: "📱",
    summary:
      "You can lawfully film police performing their duties in public, as long as you don’t obstruct them.",
    sections: [
      {
        heading: "Filming in public is legal",
        body:
          "There is no law in WA preventing you from filming or photographing police doing their job in a public place, or on your own property. Police cannot lawfully require you to stop filming, delete footage, or hand over your phone simply because you are recording them.",
      },
      {
        heading: "Don’t obstruct",
        body:
          "Keep a reasonable distance. If your filming physically interferes with police work, you could be charged with obstruction under section 172 of the Criminal Code (WA). Move back if asked, but you can keep recording.",
      },
      {
        heading: "Audio recording and private conversations",
        body:
          "The Surveillance Devices Act 1998 (WA) restricts recording ‘private conversations’ without consent. Police carrying out duties in public are generally not having a private conversation, but be careful about secretly recording conversations in private settings — get legal advice for anything beyond open filming in public.",
      },
      {
        heading: "Can police seize my phone?",
        body:
          "Police can only seize your phone using a specific legal power — for example if they reasonably suspect it holds evidence of an offence and a seizure power applies. Filming police is not, by itself, grounds for seizure. If your phone is taken, ask for the power relied on and a receipt.",
      },
    ],
    laws: ["sda", "code", "cia"],
  },
  {
    id: "young-people",
    title: "Young People & Police",
    icon: "🧒",
    summary:
      "Extra protections apply to people under 18, including support from a responsible adult.",
    sections: [
      {
        heading: "Same rights, extra protections",
        body:
          "Under-18s have the same right to silence as adults, plus extra protections under the Young Offenders Act 1994. The youth justice system focuses on cautions and referrals to a Juvenile Justice Team where appropriate, rather than court, for less serious matters.",
      },
      {
        heading: "Interviews",
        body:
          "A young person should not be interviewed about an offence without a responsible adult present — a parent, guardian, relative or other appropriate adult. Young people should always get legal advice before an interview: Legal Aid WA’s Youth Law team and ALSWA can help for free.",
      },
      {
        heading: "Identifying particulars",
        body:
          "Special rules apply to taking photos, fingerprints and DNA from children under the Criminal Investigation (Identifying People) Act 2002, with additional safeguards and, in some cases, court involvement.",
      },
    ],
    laws: ["yoa", "ciipa"],
  },
  {
    id: "protests",
    title: "Protests & Public Spaces",
    icon: "📣",
    summary:
      "Peaceful protest is lawful, but police have powers around obstruction, disorderly conduct and move-on orders.",
    sections: [
      {
        heading: "Your starting point",
        body:
          "There is no general permit needed to protest peacefully in public in WA, and Australia’s Constitution protects freedom of political communication. Marches on roads may need arrangements with police or local government.",
      },
      {
        heading: "Offences to be aware of",
        body:
          "Police commonly rely on offences such as disorderly behaviour in public (Criminal Code s 74A), obstructing public officers (s 172), unlawful damage, and trespass, as well as move-on powers under the Criminal Investigation Act 2006. Blocking roads or entrances can attract specific charges.",
      },
      {
        heading: "If police intervene",
        body:
          "You may be required to give your personal details, and you can be ordered to move on. You do not have to answer other questions. If arrested at a protest, use your right to silence and contact a lawyer — legal observer groups and ALSWA/Legal Aid can assist.",
      },
    ],
    laws: ["code", "cia", "ciipa"],
  },
  {
    id: "identifying-particulars",
    title: "Photos, Fingerprints & DNA",
    icon: "🧬",
    summary:
      "Police can take identifying particulars in defined situations under the Criminal Investigation (Identifying People) Act 2002.",
    sections: [
      {
        heading: "What are identifying particulars?",
        body:
          "These include photographs, fingerprints, palm prints, and DNA samples. The Criminal Investigation (Identifying People) Act 2002 sets out when police can take them, from whom, and what must happen to them afterwards.",
      },
      {
        heading: "When they can be taken",
        body:
          "Police can generally take identifying particulars from a person who has been arrested or charged with an offence, in some cases using reasonable force after proper authorisation. Outside arrest/charge, taking particulars usually requires your informed consent or a court order.",
      },
      {
        heading: "DNA",
        body:
          "DNA sampling has additional safeguards, including rules about how samples are taken, stored, used and destroyed. If asked to ‘volunteer’ a DNA sample, get legal advice before consenting — you are allowed to say no to a voluntary request.",
      },
    ],
    laws: ["ciipa"],
  },
  {
    id: "complaints",
    title: "Complaints About Police",
    icon: "📝",
    summary:
      "You can complain about police conduct to WA Police or the Corruption and Crime Commission.",
    sections: [
      {
        heading: "Where to complain",
        body:
          "Complaints about WA Police officers can be made to the WA Police Force (online, at any station, or via the Police Conduct Investigation Unit). Serious misconduct can be reported to the Corruption and Crime Commission (CCC), which oversees police integrity in WA.",
      },
      {
        heading: "What to record",
        body:
          "As soon as possible, write down: date, time and place; officers’ names, ranks and stations (you are entitled to ask for these); what was said and done; witness contact details; and any injuries (photograph them and see a doctor). Keep any footage safe and back it up.",
      },
      {
        heading: "Get advice for serious matters",
        body:
          "If you were injured, charged, or believe your rights were seriously breached, get legal advice before making a detailed statement. Compensation or exclusion of evidence may be possible — a lawyer can advise on the best order of steps.",
      },
    ],
    laws: ["cia"],
  },
];

const CAN_POLICE = [
  {
    q: "Can police ask for my name and address?",
    a: "yes",
    detail:
      "Yes — and you must answer if the request is lawful. Under the Criminal Investigation (Identifying People) Act 2002, police can require your name, date of birth and address if they reasonably suspect you of an offence or believe you can help investigate one. Refusing or giving false details is an offence. Outside those situations, you can politely decline.",
    laws: ["ciipa"],
  },
  {
    q: "Can police search me without a warrant?",
    a: "depends",
    detail:
      "Sometimes. Police can search you without a warrant if they reasonably suspect you’re carrying drugs, weapons, stolen property or evidence of an offence (Criminal Investigation Act 2006, Misuse of Drugs Act 1981, Weapons Act 1999). Otherwise they need a warrant or your consent — which you can refuse.",
    laws: ["cia", "moda", "weapons"],
  },
  {
    q: "Can police enter my home without a warrant?",
    a: "depends",
    detail:
      "Only in limited situations — for example to prevent violence or a breach of the peace, to arrest a suspect they reasonably believe is inside, in emergencies, or with your consent. Otherwise they need a warrant. You can refuse consent and ask what power they are relying on.",
    laws: ["cia"],
  },
  {
    q: "Can police order me to leave an area?",
    a: "yes",
    detail:
      "Yes. Under section 27 of the Criminal Investigation Act 2006, police can issue a move-on order requiring you to leave a public place and not return for up to 24 hours in certain circumstances. Disobeying without reasonable excuse is an offence.",
    laws: ["cia"],
  },
  {
    q: "Can police stop my car?",
    a: "yes",
    detail:
      "Yes. You must stop when directed by police while driving, produce your licence on request, and comply with random breath and drug testing. Refusing is an offence.",
    laws: ["rta", "rtaa"],
  },
  {
    q: "Can police search my phone?",
    a: "depends",
    detail:
      "Police need a lawful basis to seize your phone (e.g. reasonable suspicion it holds evidence) and generally a warrant or order to examine its contents. Courts can make orders requiring access information to be provided — get legal advice before answering questions about passwords or consenting to a phone search.",
    laws: ["cia"],
  },
  {
    q: "Can police stop me filming them?",
    a: "no",
    detail:
      "No — filming police performing duties in a public place is lawful, provided you don’t obstruct them. Police can’t make you delete footage or hand over your phone just because you’re filming. Keep a reasonable distance and stay calm.",
    laws: ["sda", "code"],
  },
  {
    q: "Can police take my photo and fingerprints?",
    a: "depends",
    detail:
      "If you’ve been arrested or charged, police can generally take identifying particulars (photos, fingerprints, and in some cases DNA) under the Criminal Investigation (Identifying People) Act 2002. Outside arrest or charge, they usually need your informed consent or a court order — you can say no to a voluntary request.",
    laws: ["ciipa"],
  },
  {
    q: "Can police make me answer questions?",
    a: "no",
    detail:
      "No — beyond lawfully required personal details, you have a right to silence. You can answer “no comment” to every other question, and this can’t be used as evidence of guilt. Always speak to a lawyer before taking part in an interview.",
    laws: ["ciipa", "cia"],
  },
  {
    q: "Can police use force against me?",
    a: "depends",
    detail:
      "Police may use force that is reasonably necessary to exercise a lawful power such as arrest. Force that is unreasonable or excessive is unlawful — you can complain to WA Police or the Corruption and Crime Commission and should get legal advice, especially if you were injured.",
    laws: ["cia", "code"],
  },
  {
    q: "Can police hold me at the station indefinitely?",
    a: "no",
    detail:
      "No. After arrest, detention for investigation is limited (generally up to 6 hours, extendable with senior approval). Police must then charge you and deal with bail, release you, or bring you before a court. Ask: “Am I under arrest? When will I be released or charged?”",
    laws: ["cia", "bail"],
  },
  {
    q: "Can police breath test me for no reason?",
    a: "yes",
    detail:
      "Yes — random breath testing and roadside drug testing of drivers is lawful in WA without any suspicion. Refusing a lawful test is an offence with serious penalties.",
    laws: ["rta"],
  },
];

const FAQS = [
  {
    q: "Does WA have a Human Rights Act?",
    detail:
      "No. Unlike Queensland, Victoria and the ACT, Western Australia has no Human Rights Act. Your protections in WA come from specific statutes (like the Criminal Investigation Act 2006), the common law (including the right to silence and protections against unlawful arrest), and limited federal constitutional protections. This makes knowing the specific WA rules even more important.",
  },
  {
    q: "What should I say if I don’t want to answer questions?",
    detail:
      "Something simple and polite: “I don’t wish to answer any questions until I’ve spoken to a lawyer.” Give your name, date of birth and address if lawfully required, then repeat that phrase as needed. Never lie or give false details — that is an offence.",
  },
  {
    q: "Who can I call for free legal help?",
    detail:
      "Legal Aid WA Infoline: 1300 650 579 (business hours). Aboriginal Legal Service of WA (ALSWA): 1800 019 900. Community legal centres across WA also give free advice — see communitylaw.net or Legal Aid WA’s website. If arrested, ask police to let you contact a lawyer — it’s your right.",
  },
  {
    q: "Do I have to go to the police station if asked?",
    detail:
      "Not unless you are arrested. An invitation to ‘come in for a chat’ is voluntary — you can decline. If police say you must come, ask “Am I under arrest?” If not, you are free to refuse. Get legal advice before attending any voluntary interview.",
  },
  {
    q: "What’s ‘reasonable suspicion’?",
    detail:
      "It’s more than a hunch — the officer must have actual grounds, based on facts, that would lead a reasonable person to suspect something (e.g. that you possess drugs). Race, age, appearance or being in a certain area is not, on its own, reasonable suspicion. If searched or arrested, a court can later assess whether the suspicion was reasonable.",
  },
  {
    q: "What happens if police break the rules?",
    detail:
      "Evidence obtained unlawfully or unfairly can be excluded by a court. You can also complain to the WA Police Force or the Corruption and Crime Commission, and in some cases sue for wrongful arrest or assault. Record details as soon as possible and get legal advice.",
  },
  {
    q: "Is this app legal advice?",
    detail:
      "No. This app provides general legal information for Western Australia only. Laws change and every situation is different. For advice about your specific circumstances, make an appointment with Slee Anderson & Pidgeon Lawyers — offices in Bunbury, Busselton, Mandurah and Margaret River.",
  },
];

const SITUATIONS = [
  { label: "I’ve been stopped by police on the street", target: "stopped-questioned", icon: "🚶" },
  { label: "I’ve been pulled over while driving", target: "vehicle-stops", icon: "🚗" },
  { label: "Police want to search me or my bag", target: "searches", icon: "🔍" },
  { label: "I’m being arrested", target: "arrest", icon: "⛓️" },
  { label: "Police want to interview me", target: "police-interview", icon: "🎙️" },
  { label: "Police are at my front door", target: "police-home", icon: "🏠" },
  { label: "I’ve been told to move on", target: "move-on", icon: "🚫" },
  { label: "I want to film a police interaction", target: "filming-police", icon: "📱" },
  { label: "This involves someone under 18", target: "young-people", icon: "🧒" },
  { label: "I’m at a protest", target: "protests", icon: "📣" },
  { label: "I want to complain about police", target: "complaints", icon: "📝" },
];

const DISCLAIMER =
  "This app provides general legal information about Western Australia only — it is not legal advice. Laws change and every situation is different. All referenced legislation is publicly available via legislation.wa.gov.au. For advice about your specific situation, make an appointment with Slee Anderson & Pidgeon Lawyers.";
