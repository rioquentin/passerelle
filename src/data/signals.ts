// Spiel „Wann? Ja oder nein?“ – Processing Instruction : il faut interpréter la forme pour répondre.
export type SignalKind = 'zeit' | 'neg';

export interface SignalItem {
  fr: string;
  kind: SignalKind;
  answer: string; // pour zeit : 'vorher' | 'jetzt' | 'später' ; pour neg : 'ja' | 'nein' | 'nur'
  why: string;
}

export const ZEIT_OPTIONS = [
  { id: 'vorher', label: 'Vorher', hint: 'Vergangenheit' },
  { id: 'jetzt', label: 'Jetzt', hint: 'Gegenwart' },
  { id: 'später', label: 'Später', hint: 'Zukunft' },
];
export const NEG_OPTIONS = [
  { id: 'ja', label: 'Ja, es stimmt', hint: 'bejaht' },
  { id: 'nein', label: 'Nein, nicht', hint: 'verneint' },
  { id: 'nur', label: 'Nur …', hint: 'Einschränkung' },
];

export const SIGNALS: SignalItem[] = [
  // Passé composé = Perfekt
  { fr: "J'ai mangé une pizza.", kind: 'zeit', answer: 'vorher', why: '„ai“ + „mangé“ = Perfekt: ich habe gegessen.' },
  { fr: 'Lena est partie à huit heures.', kind: 'zeit', answer: 'vorher', why: '„est“ + „partie“ = Perfekt mit „sein“: sie ist gegangen.' },
  { fr: 'On a vu un film hier soir.', kind: 'zeit', answer: 'vorher', why: '„a vu“ = hat gesehen. Und „hier“ = gestern!' },
  { fr: 'Ils sont arrivés à Toulouse.', kind: 'zeit', answer: 'vorher', why: '„sont arrivés“ = sind angekommen.' },
  { fr: "Tu as fini ton café ?", kind: 'zeit', answer: 'vorher', why: '„as fini“ = hast beendet.' },
  { fr: 'Hugo a pris le train.', kind: 'zeit', answer: 'vorher', why: '„a pris“ = hat genommen.' },
  // Imparfait
  { fr: "C'était très beau.", kind: 'zeit', answer: 'vorher', why: '„-ait“ (était) = Beschreibung in der Vergangenheit: es war.' },
  { fr: 'Il y avait beaucoup de gens.', kind: 'zeit', answer: 'vorher', why: '„avait“ = es gab (Vergangenheit).' },
  { fr: 'Quand elle était petite, elle habitait à Berlin.', kind: 'zeit', answer: 'vorher', why: '„-ait“ zweimal: Gewohnheit in der Vergangenheit.' },
  // Présent
  { fr: 'Je mange une pizza.', kind: 'zeit', answer: 'jetzt', why: 'Kein Hilfsverb, kein -r-, kein -ait: Gegenwart.' },
  { fr: 'Lena habite à Toulouse.', kind: 'zeit', answer: 'jetzt', why: '„habite“ = wohnt (jetzt).' },
  { fr: 'Le chat dort sur le balcon.', kind: 'zeit', answer: 'jetzt', why: '„dort“ = schläft. (Kein „dort“ wie im Deutschen!)' },
  { fr: 'On est au café.', kind: 'zeit', answer: 'jetzt', why: '„est“ allein, ohne Partizip = ist (jetzt).' },
  { fr: "Je vais à la boulangerie.", kind: 'zeit', answer: 'jetzt', why: 'Falle! „vais à“ + Ort = ich gehe (gerade) hin. Keine Zukunft.' },
  { fr: 'Il fait chaud aujourd\'hui.', kind: 'zeit', answer: 'jetzt', why: '„aujourd’hui“ = heute, „fait“ = Gegenwart.' },
  // Futur proche
  { fr: 'Je vais manger une pizza.', kind: 'zeit', answer: 'später', why: '„vais“ + Infinitiv (manger) = gleich / bald.' },
  { fr: 'On va partir demain.', kind: 'zeit', answer: 'später', why: '„va partir“ = wird abfahren. Und „demain“ = morgen.' },
  { fr: 'Ils vont visiter le musée.', kind: 'zeit', answer: 'später', why: '„vont“ + Infinitiv = Zukunft.' },
  { fr: 'Tu vas adorer Toulouse !', kind: 'zeit', answer: 'später', why: '„vas adorer“ = wirst lieben.' },
  // Futur simple
  { fr: 'Elle parlera avec Hugo.', kind: 'zeit', answer: 'später', why: '„-era“: das -r- vor der Endung zeigt Zukunft.' },
  { fr: 'Ce sera difficile.', kind: 'zeit', answer: 'später', why: '„sera“ = wird sein.' },
  { fr: "On ira à la mer.", kind: 'zeit', answer: 'später', why: '„ira“ = wird gehen (von aller).' },
  { fr: "Il fera beau demain.", kind: 'zeit', answer: 'später', why: '„fera“ = wird machen → wird schön.' },
  // il y a + durée
  { fr: "Lena est arrivée il y a deux ans.", kind: 'zeit', answer: 'vorher', why: '„il y a“ + Zeitdauer = vor: vor zwei Jahren.' },
  { fr: "Il y a un chat sur le balcon.", kind: 'zeit', answer: 'jetzt', why: 'Hier ist „il y a“ = es gibt / da ist.' },

  // Négation
  { fr: "Je sais pas.", kind: 'neg', answer: 'nein', why: 'Gesprochen fällt „ne“ weg. Das Signal ist „pas“.' },
  { fr: "Je ne sais pas.", kind: 'neg', answer: 'nein', why: '„ne … pas“ = nicht.' },
  { fr: "C'est pas grave.", kind: 'neg', answer: 'nein', why: '„pas“ = nicht schlimm.' },
  { fr: "Elle habite plus à Paris.", kind: 'neg', answer: 'nein', why: 'Gesprochen fällt „ne“ weg: „plus“ = nicht mehr. Sie wohnt nicht mehr in Paris.' },
  { fr: "Elle a jamais vu la mer.", kind: 'neg', answer: 'nein', why: '„jamais“ = nie.' },
  { fr: "On a rien compris.", kind: 'neg', answer: 'nein', why: '„rien“ = nichts.' },
  { fr: "Il y a personne.", kind: 'neg', answer: 'nein', why: '„personne“ nach dem Verb = niemand.' },
  { fr: "Je n'ai que deux euros.", kind: 'neg', answer: 'nur', why: 'Falle! „ne … que“ = nur. Ich habe nur zwei Euro.' },
  { fr: "Elle ne boit que du thé.", kind: 'neg', answer: 'nur', why: '„ne … que“ = nur: sie trinkt nur Tee.' },
  { fr: "On n'a qu'une semaine.", kind: 'neg', answer: 'nur', why: '„n’ … qu’“ = nur eine Woche.' },
  { fr: "Il n'y a que des tomates.", kind: 'neg', answer: 'nur', why: '„ne … que“ = es gibt nur Tomaten.' },
  { fr: "J'adore le chocolat.", kind: 'neg', answer: 'ja', why: 'Kein pas / plus / jamais / rien: bejaht.' },
  { fr: "Elle a compris.", kind: 'neg', answer: 'ja', why: 'Bejaht: sie hat verstanden.' },
  { fr: "Il y a encore du pain.", kind: 'neg', answer: 'ja', why: '„encore“ = noch: es gibt noch Brot.' },
  { fr: "On y va ?", kind: 'neg', answer: 'ja', why: 'Bejahte Frage: Gehen wir?' },
];
