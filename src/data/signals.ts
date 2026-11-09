// Spiel „Signale“ – Processing Instruction : il faut interpréter la forme pour répondre.
// Les 12 signaux de grammaire réceptive de la recherche (§8), chacun avec sa série d'items.
export type SignalKind = 'zeit' | 'neg' | 'frei';

export interface SignalItem {
  fr: string;
  sig: number; // 1–12 ; 0 = phrase de contraste (présent) pour les séries de temps
  kind: SignalKind;
  answer: string; // zeit : 'vorher' | 'jetzt' | 'später' ; neg : 'ja' | 'nein' | 'nur' ; frei : libellé exact de la bonne réponse
  why: string;
  ask?: string; // frei : question propre à l'item
  opts?: string[]; // frei : choix propres à l'item (contient la bonne réponse)
}

export interface SignalSet {
  n: number;
  title: string;
  sub: string;
  ask?: string; // question par défaut (frei)
  opts?: string[]; // choix fixes (frei), dans cet ordre
  pool?: string[]; // choix tirés au hasard (frei) : bonne réponse + 2 autres
}

export const SETS: SignalSet[] = [
  { n: 1, title: 'Verneinung', sub: 'pas, plus, jamais, rien, personne – oft ohne „ne“' },
  { n: 2, title: 'ne … que = nur', sub: 'Sieht aus wie eine Verneinung, ist aber keine' },
  { n: 3, title: 'Perfekt', sub: 'ai / est + gemacht: j’ai mangé, elle est partie' },
  { n: 4, title: 'Nahe Zukunft', sub: 'vais / va + Infinitiv: je vais manger' },
  { n: 5, title: 'Futur', sub: 'Das -r- vor der Endung: parlera, sera, ira' },
  { n: 6, title: 'Imparfait', sub: '-ait, -ais: c’était, il y avait – früher, Beschreibung' },
  { n: 7, title: 'Kleine Wörter vor dem Verb', sub: 'le, la, lui, leur, me, te, y, en', ask: 'Wofür steht das kleine Wort vor dem Verb?' },
  { n: 8, title: 'Fragen erkennen', sub: 'où, quand, qui, pourquoi, est-ce que …', ask: 'Was wird gefragt?',
    pool: ['Wo?', 'Wann?', 'Wer?', 'Warum?', 'Wie viel?', 'Wie?', 'Was?', 'Ja oder nein?'] },
  { n: 9, title: '„on“ = wir oder man?', sub: 'Gesprochen fast immer „wir“', ask: 'Wer ist hier „on“?',
    opts: ['wir', 'man (die Leute allgemein)'] },
  { n: 10, title: '„il y a“ = es gibt oder vor?', sub: 'Mit Zeitangabe heißt es „vor“', ask: 'Was heißt hier „il y a“?',
    opts: ['es gibt / da ist', 'vor (zeitlich)'] },
  { n: 11, title: 'Höflich: je voudrais', sub: '-rais, -rait, -riez = würde, hätte gern', ask: 'Wie klingt das?',
    opts: ['Höflich / „würde“ (-rais, -rait)', 'Direkt / Tatsache (will, kann, ist)'] },
  { n: 12, title: 'qui / que: Wer tut was?', sub: 'qui = der (tut etwas), que = den (mit dem etwas passiert)' },
];

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

const HOEF = 'Höflich / „würde“ (-rais, -rait)';
const DIREKT = 'Direkt / Tatsache (will, kann, ist)';
const WIR = 'wir';
const MAN = 'man (die Leute allgemein)';
const GIBT = 'es gibt / da ist';
const VOR = 'vor (zeitlich)';

export const SIGNALS: SignalItem[] = [
  // 3 · Passé composé = Perfekt
  { sig: 3, fr: "J'ai mangé une pizza.", kind: 'zeit', answer: 'vorher', why: '„ai“ + „mangé“ = Perfekt: ich habe gegessen.' },
  { sig: 3, fr: 'Lena est partie à huit heures.', kind: 'zeit', answer: 'vorher', why: '„est“ + „partie“ = Perfekt mit „sein“: sie ist gegangen.' },
  { sig: 3, fr: 'On a vu un film hier soir.', kind: 'zeit', answer: 'vorher', why: '„a vu“ = hat gesehen. Und „hier“ = gestern!' },
  { sig: 3, fr: 'Ils sont arrivés à Toulouse.', kind: 'zeit', answer: 'vorher', why: '„sont arrivés“ = sind angekommen.' },
  { sig: 3, fr: 'Tu as fini ton café ?', kind: 'zeit', answer: 'vorher', why: '„as fini“ = hast beendet.' },
  { sig: 3, fr: 'Hugo a pris le train.', kind: 'zeit', answer: 'vorher', why: '„a pris“ = hat genommen.' },
  { sig: 3, fr: 'Elle est tombée dans la rue.', kind: 'zeit', answer: 'vorher', why: '„est tombée“ = ist gefallen.' },
  { sig: 3, fr: 'Nous avons beaucoup marché.', kind: 'zeit', answer: 'vorher', why: '„avons marché“ = sind gelaufen. Achtung: „marché“ heißt hier nicht Markt!' },
  // 6 · Imparfait
  { sig: 6, fr: "C'était très beau.", kind: 'zeit', answer: 'vorher', why: '„-ait“ (était) = Beschreibung in der Vergangenheit: es war.' },
  { sig: 6, fr: 'Il y avait beaucoup de gens.', kind: 'zeit', answer: 'vorher', why: '„avait“ = es gab (Vergangenheit).' },
  { sig: 6, fr: 'Quand elle était petite, elle habitait à Berlin.', kind: 'zeit', answer: 'vorher', why: '„-ait“ zweimal: Gewohnheit in der Vergangenheit.' },
  { sig: 6, fr: 'Il faisait froid.', kind: 'zeit', answer: 'vorher', why: '„faisait“ = es war (kalt). „-ait“ beschreibt, wie es früher war.' },
  { sig: 6, fr: 'Avant, je travaillais à Berlin.', kind: 'zeit', answer: 'vorher', why: '„travaillais“: „-ais“ = früher, regelmäßig.' },
  { sig: 6, fr: 'Minou dormait sur le balcon.', kind: 'zeit', answer: 'vorher', why: '„dormait“ = schlief. Vergleiche „Minou dort“ = schläft (jetzt).' },
  { sig: 6, fr: 'Elle avait vingt ans.', kind: 'zeit', answer: 'vorher', why: '„avait“ = hatte: sie war zwanzig.' },
  // 0 · Présent (Kontrast)
  { sig: 0, fr: 'Je mange une pizza.', kind: 'zeit', answer: 'jetzt', why: 'Kein Hilfsverb, kein -r-, kein -ait: Gegenwart.' },
  { sig: 0, fr: 'Lena habite à Toulouse.', kind: 'zeit', answer: 'jetzt', why: '„habite“ = wohnt (jetzt).' },
  { sig: 0, fr: 'Le chat dort sur le balcon.', kind: 'zeit', answer: 'jetzt', why: '„dort“ = schläft. (Kein „dort“ wie im Deutschen!)' },
  { sig: 0, fr: 'On est au café.', kind: 'zeit', answer: 'jetzt', why: '„est“ allein, ohne Partizip = ist (jetzt).' },
  { sig: 0, fr: "Il fait chaud aujourd'hui.", kind: 'zeit', answer: 'jetzt', why: '„aujourd’hui“ = heute, „fait“ = Gegenwart.' },
  { sig: 0, fr: 'Hugo prend le train.', kind: 'zeit', answer: 'jetzt', why: '„prend“ = nimmt. Vergleiche „a pris“ = hat genommen.' },
  { sig: 0, fr: 'Tu finis ton café ?', kind: 'zeit', answer: 'jetzt', why: '„finis“ ohne „as“ = beendest (jetzt).' },
  { sig: 0, fr: 'Elle parle avec Hugo.', kind: 'zeit', answer: 'jetzt', why: '„parle“ ohne -r- = spricht. Vergleiche „parlera“ = wird sprechen.' },
  // 4 · Futur proche
  { sig: 4, fr: 'Je vais manger une pizza.', kind: 'zeit', answer: 'später', why: '„vais“ + Infinitiv (manger) = gleich / bald.' },
  { sig: 4, fr: 'On va partir demain.', kind: 'zeit', answer: 'später', why: '„va partir“ = wird abfahren. Und „demain“ = morgen.' },
  { sig: 4, fr: 'Ils vont visiter le musée.', kind: 'zeit', answer: 'später', why: '„vont“ + Infinitiv = Zukunft.' },
  { sig: 4, fr: 'Tu vas adorer Toulouse !', kind: 'zeit', answer: 'später', why: '„vas adorer“ = wirst lieben.' },
  { sig: 4, fr: 'Il va pleuvoir.', kind: 'zeit', answer: 'später', why: '„va pleuvoir“ = es wird regnen.' },
  { sig: 4, fr: 'Nous allons manger chez Hugo.', kind: 'zeit', answer: 'später', why: '„allons“ + Infinitiv = wir werden essen.' },
  { sig: 4, fr: 'Je vais à la boulangerie.', kind: 'zeit', answer: 'jetzt', why: 'Falle! „vais à“ + Ort = ich gehe (gerade) hin. Kein Infinitiv, keine Zukunft.' },
  { sig: 4, fr: 'Ils vont au marché.', kind: 'zeit', answer: 'jetzt', why: 'Falle! „vont au“ + Ort = sie gehen zum Markt. Kein Infinitiv.' },
  // 5 · Futur simple
  { sig: 5, fr: 'Elle parlera avec Hugo.', kind: 'zeit', answer: 'später', why: '„-era“: das -r- vor der Endung zeigt Zukunft.' },
  { sig: 5, fr: 'Ce sera difficile.', kind: 'zeit', answer: 'später', why: '„sera“ = wird sein.' },
  { sig: 5, fr: 'On ira à la mer.', kind: 'zeit', answer: 'später', why: '„ira“ = wird gehen (von aller).' },
  { sig: 5, fr: 'Il fera beau demain.', kind: 'zeit', answer: 'später', why: '„fera“ = wird machen → wird schön.' },
  { sig: 5, fr: 'Nous verrons.', kind: 'zeit', answer: 'später', why: '„verrons“ = werden sehen (von voir).' },
  { sig: 5, fr: 'Tu auras le temps ?', kind: 'zeit', answer: 'später', why: '„auras“ = wirst haben.' },
  { sig: 5, fr: 'Je viendrai demain.', kind: 'zeit', answer: 'später', why: '„viendrai“ = werde kommen.' },

  // 1 · Négation
  { sig: 1, fr: 'Je sais pas.', kind: 'neg', answer: 'nein', why: 'Gesprochen fällt „ne“ weg. Das Signal ist „pas“.' },
  { sig: 1, fr: 'Je ne sais pas.', kind: 'neg', answer: 'nein', why: '„ne … pas“ = nicht.' },
  { sig: 1, fr: "C'est pas grave.", kind: 'neg', answer: 'nein', why: '„pas“ = nicht schlimm.' },
  { sig: 1, fr: 'Elle habite plus à Paris.', kind: 'neg', answer: 'nein', why: 'Gesprochen fällt „ne“ weg: „plus“ = nicht mehr. Sie wohnt nicht mehr in Paris.' },
  { sig: 1, fr: 'Elle a jamais vu la mer.', kind: 'neg', answer: 'nein', why: '„jamais“ = nie.' },
  { sig: 1, fr: 'On a rien compris.', kind: 'neg', answer: 'nein', why: '„rien“ = nichts.' },
  { sig: 1, fr: 'Il y a personne.', kind: 'neg', answer: 'nein', why: '„personne“ nach dem Verb = niemand.' },
  { sig: 1, fr: "Personne n'est venu.", kind: 'neg', answer: 'nein', why: '„personne“ am Anfang = niemand ist gekommen.' },
  { sig: 1, fr: 'Il pleut plus.', kind: 'neg', answer: 'nein', why: '„plus“ ohne „ne“ = nicht mehr: es regnet nicht mehr.' },
  { sig: 1, fr: 'Tu viens pas ?', kind: 'neg', answer: 'nein', why: '„pas“ = nicht: kommst du nicht?' },
  { sig: 1, fr: "J'ai rien dit.", kind: 'neg', answer: 'nein', why: '„rien“ = nichts: ich habe nichts gesagt.' },
  { sig: 1, fr: "J'adore le chocolat.", kind: 'neg', answer: 'ja', why: 'Kein pas / plus / jamais / rien: bejaht.' },
  { sig: 1, fr: 'Elle a compris.', kind: 'neg', answer: 'ja', why: 'Bejaht: sie hat verstanden.' },
  { sig: 1, fr: 'Il y a encore du pain.', kind: 'neg', answer: 'ja', why: '„encore“ = noch: es gibt noch Brot.' },
  { sig: 1, fr: 'On y va ?', kind: 'neg', answer: 'ja', why: 'Bejahte Frage: Gehen wir?' },
  { sig: 1, fr: 'Elle dit toujours oui.', kind: 'neg', answer: 'ja', why: '„toujours“ = immer. Keine Verneinung.' },
  // 2 · ne … que
  { sig: 2, fr: "Je n'ai que deux euros.", kind: 'neg', answer: 'nur', why: 'Falle! „ne … que“ = nur. Ich habe nur zwei Euro.' },
  { sig: 2, fr: 'Elle ne boit que du thé.', kind: 'neg', answer: 'nur', why: '„ne … que“ = nur: sie trinkt nur Tee.' },
  { sig: 2, fr: "On n'a qu'une semaine.", kind: 'neg', answer: 'nur', why: '„n’ … qu’“ = nur eine Woche.' },
  { sig: 2, fr: "Il n'y a que des tomates.", kind: 'neg', answer: 'nur', why: '„ne … que“ = es gibt nur Tomaten.' },
  { sig: 2, fr: "Je bois que de l'eau.", kind: 'neg', answer: 'nur', why: 'Gesprochen fällt „ne“ weg – „que“ bleibt: ich trinke nur Wasser.' },
  { sig: 2, fr: 'Il ne reste que trois jours.', kind: 'neg', answer: 'nur', why: '„ne … que“ = es bleiben nur drei Tage.' },
  { sig: 2, fr: 'Ici, on ne parle que français.', kind: 'neg', answer: 'nur', why: '„ne … que“ = hier spricht man nur Französisch.' },
  { sig: 2, fr: 'Ça coûte que deux euros.', kind: 'neg', answer: 'nur', why: 'Ohne „ne“, aber „que“ vor der Menge = nur zwei Euro.' },
  { sig: 2, fr: "Je ne bois pas d'eau.", kind: 'neg', answer: 'nein', why: 'Hier „ne … pas“: ich trinke kein Wasser. Vergleiche „ne … que“!' },
  { sig: 2, fr: 'Il ne reste pas de pain.', kind: 'neg', answer: 'nein', why: '„ne … pas“ = es ist kein Brot mehr da.' },

  // 7 · Pronoms objets, y, en
  { sig: 7, kind: 'frei', fr: 'Le chat ? Lena le regarde.', opts: ['den Kater', 'Lena', 'den Balkon'], answer: 'den Kater', why: '„le“ vor dem Verb = ihn: Lena schaut ihn an.' },
  { sig: 7, kind: 'frei', fr: 'La valise ? Je la prends.', opts: ['den Koffer', 'mich', 'Lena'], answer: 'den Koffer', why: '„la“ = sie (la valise ist weiblich): ich nehme ihn.' },
  { sig: 7, kind: 'frei', fr: 'Les tomates ? Hugo les achète.', opts: ['die Tomaten', 'Hugo', 'den Markt'], answer: 'die Tomaten', why: '„les“ vor dem Verb = sie (Mehrzahl): Hugo kauft sie.' },
  { sig: 7, kind: 'frei', fr: 'Madame Roux ? Je lui téléphone ce soir.', opts: ['Madame Roux', 'mich', 'heute Abend'], answer: 'Madame Roux', why: '„lui“ = ihr / ihm: ich rufe sie heute Abend an.' },
  { sig: 7, kind: 'frei', fr: "Tu vas à Toulouse ? Oui, j'y vais demain.", opts: ['nach Toulouse', 'morgen', 'zu dir'], answer: 'nach Toulouse', why: '„y“ = dorthin: ich fahre morgen hin.' },
  { sig: 7, kind: 'frei', fr: "Du pain ? Oui, j'en veux deux.", opts: ['Brot (davon)', 'Euro', 'Tage'], answer: 'Brot (davon)', why: '„en“ = davon: ich will zwei davon.' },
  { sig: 7, kind: 'frei', fr: 'Hugo me regarde.', ask: 'Wen schaut Hugo an?', opts: ['mich', 'dich', 'sich selbst'], answer: 'mich', why: '„me“ vor dem Verb = mich.' },
  { sig: 7, kind: 'frei', fr: 'Je te donne le livre.', ask: 'Wem gebe ich das Buch?', opts: ['dir', 'mir', 'ihm'], answer: 'dir', why: '„te“ vor dem Verb = dir / dich.' },
  { sig: 7, kind: 'frei', fr: 'Mes amis ? Je leur écris une lettre.', opts: ['meinen Freunden', 'mir', 'dem Brief'], answer: 'meinen Freunden', why: '„leur“ vor dem Verb = ihnen.' },
  { sig: 7, kind: 'frei', fr: 'Le café ? Lena y va chaque matin.', opts: ['ins Café', 'jeden Morgen', 'zu Lena'], answer: 'ins Café', why: '„y“ = dorthin: Lena geht jeden Morgen hin.' },
  { sig: 7, kind: 'frei', fr: 'Des enfants ? Elle en a trois.', opts: ['Kinder', 'Jahre', 'Katzen'], answer: 'Kinder', why: '„en“ = davon: sie hat drei (Kinder).' },
  { sig: 7, kind: 'frei', fr: "Minou ? On l'adore !", opts: ['Minou', 'uns', 'Lena'], answer: 'Minou', why: '„l’“ = „le“ vor Vokal: wir lieben ihn.' },

  // 8 · Questions
  { sig: 8, kind: 'frei', fr: 'Où est le chat ?', answer: 'Wo?', why: '„où“ = wo.' },
  { sig: 8, kind: 'frei', fr: 'Quand est-ce que tu arrives ?', answer: 'Wann?', why: '„quand“ = wann.' },
  { sig: 8, kind: 'frei', fr: 'Qui a pris mon pain ?', answer: 'Wer?', why: '„qui“ = wer.' },
  { sig: 8, kind: 'frei', fr: 'Pourquoi tu ris ?', answer: 'Warum?', why: '„pourquoi“ = warum. Die Antwort beginnt mit „parce que“ = weil.' },
  { sig: 8, kind: 'frei', fr: 'Combien ça coûte ?', answer: 'Wie viel?', why: '„combien“ = wie viel.' },
  { sig: 8, kind: 'frei', fr: "Comment tu t'appelles ?", answer: 'Wie?', why: '„comment“ = wie: Wie heißt du?' },
  { sig: 8, kind: 'frei', fr: "Qu'est-ce que tu manges ?", answer: 'Was?', why: '„qu’est-ce que“ = was.' },
  { sig: 8, kind: 'frei', fr: 'Est-ce que tu viens ce soir ?', answer: 'Ja oder nein?', why: '„est-ce que“ macht nur eine Frage daraus – Antwort: ja oder nein.' },
  { sig: 8, kind: 'frei', fr: 'Tu viens ce soir ?', answer: 'Ja oder nein?', why: 'Nur die Stimme geht hoch. Gesprochen die häufigste Frageform.' },
  { sig: 8, kind: 'frei', fr: 'Tu habites où ?', answer: 'Wo?', why: 'Fragewort am Ende – typisch gesprochen: Wo wohnst du?' },
  { sig: 8, kind: 'frei', fr: 'Vous partez quand ?', answer: 'Wann?', why: '„quand“ am Ende = wann.' },
  { sig: 8, kind: 'frei', fr: 'Parlez-vous allemand ?', answer: 'Ja oder nein?', why: 'Verb vor „vous“ = höfliche, geschriebene Frageform.' },
  { sig: 8, kind: 'frei', fr: "C'est qui ?", answer: 'Wer?', why: '„qui“ am Ende = wer: Wer ist das?' },
  { sig: 8, kind: 'frei', fr: 'Il fait quoi, Hugo ?', answer: 'Was?', why: '„quoi“ am Ende = was: Was macht Hugo?' },

  // 9 · on
  { sig: 9, kind: 'frei', fr: 'On va au cinéma ce soir ?', answer: WIR, why: 'Ein Vorschlag unter Freunden: „on“ = wir.' },
  { sig: 9, kind: 'frei', fr: 'En France, on mange tard.', answer: MAN, why: 'Allgemeine Aussage über alle: „on“ = man.' },
  { sig: 9, kind: 'frei', fr: 'Hugo et moi, on est voisins.', answer: WIR, why: '„Hugo und ich“ = wir.' },
  { sig: 9, kind: 'frei', fr: 'Ici, on parle français.', answer: MAN, why: 'Allgemein: hier spricht man Französisch.' },
  { sig: 9, kind: 'frei', fr: 'On a acheté du vin pour la fête.', answer: WIR, why: 'Eine bestimmte Gruppe hat etwas getan: wir.' },
  { sig: 9, kind: 'frei', fr: 'On dit que Madame Roux sait tout.', answer: MAN, why: '„On dit“ = man sagt.' },
  { sig: 9, kind: 'frei', fr: 'Lena, on y va ?', answer: WIR, why: '„On y va ?“ = Gehen wir?' },
  { sig: 9, kind: 'frei', fr: 'Au marché, on trouve de tout.', answer: MAN, why: 'Allgemein: auf dem Markt findet man alles.' },
  { sig: 9, kind: 'frei', fr: "On s'appelle demain ?", answer: WIR, why: 'Telefonieren wir morgen? – „on“ = wir.' },
  { sig: 9, kind: 'frei', fr: 'Dans ce restaurant, on paie à la sortie.', answer: MAN, why: 'Eine Regel für alle: man zahlt am Ausgang.' },

  // 10 · il y a
  { sig: 10, kind: 'frei', fr: 'Il y a un chat sur le balcon.', answer: GIBT, why: 'Ohne Zeitangabe: „il y a“ = da ist / es gibt.' },
  { sig: 10, kind: 'frei', fr: 'Lena est arrivée il y a deux ans.', answer: VOR, why: '„il y a“ + Zeitdauer = vor: vor zwei Jahren.' },
  { sig: 10, kind: 'frei', fr: 'Il y a beaucoup de monde au marché.', answer: GIBT, why: 'Es gibt viele Leute auf dem Markt.' },
  { sig: 10, kind: 'frei', fr: "J'ai vu Hugo il y a une heure.", answer: VOR, why: '„il y a une heure“ = vor einer Stunde.' },
  { sig: 10, kind: 'frei', fr: 'Il y a un problème.', answer: GIBT, why: 'Es gibt ein Problem.' },
  { sig: 10, kind: 'frei', fr: 'Il y a trois jours, il faisait beau.', answer: VOR, why: '„il y a trois jours“ = vor drei Tagen.' },
  { sig: 10, kind: 'frei', fr: 'Il y a du pain ?', answer: GIBT, why: 'Gibt es Brot?' },
  { sig: 10, kind: 'frei', fr: 'Ils sont partis il y a dix minutes.', answer: VOR, why: '„il y a dix minutes“ = vor zehn Minuten.' },
  { sig: 10, kind: 'frei', fr: "Il y a une boulangerie près d'ici.", answer: GIBT, why: 'Hier in der Nähe gibt es eine Bäckerei.' },
  { sig: 10, kind: 'frei', fr: 'Elle a appelé il y a cinq minutes.', answer: VOR, why: '„il y a cinq minutes“ = vor fünf Minuten.' },

  // 11 · Conditionnel de politesse
  { sig: 11, kind: 'frei', fr: "Je voudrais un café, s'il vous plaît.", answer: HOEF, why: '„voudrais“ = hätte gern: höflich.' },
  { sig: 11, kind: 'frei', fr: 'Je veux un café.', answer: DIREKT, why: '„veux“ = will: direkt. Unter Freunden okay.' },
  { sig: 11, kind: 'frei', fr: 'Pourriez-vous répéter ?', answer: HOEF, why: '„pourriez“ = könnten Sie: sehr höflich.' },
  { sig: 11, kind: 'frei', fr: 'Vous pouvez répéter ?', answer: DIREKT, why: '„pouvez“ = können: normale Frage.' },
  { sig: 11, kind: 'frei', fr: "J'aimerais visiter le musée.", answer: HOEF, why: '„aimerais“ = würde gern.' },
  { sig: 11, kind: 'frei', fr: "J'aime visiter les musées.", answer: DIREKT, why: '„aime“ = mag: eine Tatsache.' },
  { sig: 11, kind: 'frei', fr: 'Ce serait parfait.', answer: HOEF, why: '„serait“ = wäre.' },
  { sig: 11, kind: 'frei', fr: "C'est parfait.", answer: DIREKT, why: '„est“ = ist: Tatsache.' },
  { sig: 11, kind: 'frei', fr: "Tu pourrais m'aider ?", answer: HOEF, why: '„pourrais“ = könntest.' },
  { sig: 11, kind: 'frei', fr: "Tu peux m'aider ?", answer: DIREKT, why: '„peux“ = kannst.' },
  { sig: 11, kind: 'frei', fr: 'Il faudrait réserver.', answer: HOEF, why: '„faudrait“ = man müsste (vorsichtig gesagt).' },
  { sig: 11, kind: 'frei', fr: 'Il faut réserver.', answer: DIREKT, why: '„faut“ = man muss.' },

  // 12 · qui / que / où / dont
  { sig: 12, kind: 'frei', fr: "L'homme qui parle avec Lena est le voisin.", ask: 'Wer spricht mit Lena?', opts: ['der Mann', 'Lena', 'Madame Roux'], answer: 'der Mann', why: '„qui“ = der (tut etwas): der Mann spricht.' },
  { sig: 12, kind: 'frei', fr: 'Le chat que Hugo cherche dort dans la valise.', ask: 'Wer sucht?', opts: ['Hugo', 'der Kater', 'Lena'], answer: 'Hugo', why: '„que“ = den: der Kater, den Hugo sucht.' },
  { sig: 12, kind: 'frei', fr: 'La femme que Lena regarde est Madame Roux.', ask: 'Wer schaut?', opts: ['Lena', 'Madame Roux', 'Hugo'], answer: 'Lena', why: '„que“ = die (Akkusativ): die Frau, die Lena anschaut.' },
  { sig: 12, kind: 'frei', fr: 'La femme qui regarde Lena est Madame Roux.', ask: 'Wer schaut?', opts: ['Madame Roux', 'Lena', 'Hugo'], answer: 'Madame Roux', why: '„qui“ = die (tut etwas): die Frau schaut Lena an.' },
  { sig: 12, kind: 'frei', fr: 'Le café où Lena travaille est petit.', ask: 'Was ist klein?', opts: ['das Café', 'Lena', 'die Arbeit'], answer: 'das Café', why: '„où“ = wo: das Café, wo Lena arbeitet.' },
  { sig: 12, kind: 'frei', fr: "C'est Hugo qui a acheté le vin.", ask: 'Wer hat den Wein gekauft?', opts: ['Hugo', 'Lena', 'niemand'], answer: 'Hugo', why: '„qui“ = der: Hugo hat ihn gekauft.' },
  { sig: 12, kind: 'frei', fr: "C'est le vin que Hugo a acheté.", ask: 'Wer hat gekauft?', opts: ['Hugo', 'der Wein', 'Lena'], answer: 'Hugo', why: '„que“ = den: der Wein, den Hugo gekauft hat.' },
  { sig: 12, kind: 'frei', fr: 'Le livre dont je parle est sur la table.', ask: 'Worüber spreche ich?', opts: ['über das Buch', 'über den Tisch', 'über mich'], answer: 'über das Buch', why: '„dont“ = von dem / über das.' },
  { sig: 12, kind: 'frei', fr: 'Le garçon que le chien regarde a peur.', ask: 'Wer schaut?', opts: ['der Hund', 'der Junge', 'niemand'], answer: 'der Hund', why: '„que“ = den: der Junge, den der Hund anschaut.' },
  { sig: 12, kind: 'frei', fr: 'Le chien qui regarde le garçon a faim.', ask: 'Wer hat Hunger?', opts: ['der Hund', 'der Junge', 'Lena'], answer: 'der Hund', why: '„qui“ = der: der Hund schaut und hat Hunger.' },
];
