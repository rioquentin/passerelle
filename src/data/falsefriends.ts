// Spiel „Freund oder Verräter?“
// fr : le mot français ; looks : le mot qu'il rappelle ; lang : langue du sosie
// friend : true = vrai ami (même sens), false = faux ami
// de : sens réel en allemand ; note : explication courte
// fake : true = « faux gallicisme » : un mot allemand qui n'existe pas en français avec ce sens

export interface FF {
  fr: string;
  looks: string;
  lang: 'de' | 'en';
  friend: boolean;
  de: string;
  note: string;
  forms?: string;
  fake?: boolean;
}

export const FALSE_FRIENDS: FF[] = [
  // Faux amis allemands, du plus dangereux au moins dangereux
  { fr: 'hier', looks: 'hier', lang: 'de', friend: false, de: 'gestern', note: 'Der gefährlichste Verräter: „hier“ = gestern. „Hier“ auf Deutsch heißt „ici“.' },
  { fr: 'clavier', looks: 'Klavier', lang: 'de', friend: false, de: 'Tastatur', note: 'Ein Klavier heißt „piano“.' },
  { fr: 'figure', looks: 'Figur', lang: 'de', friend: false, de: 'Gesicht', note: '„La figure“ ist meist das Gesicht.' },
  { fr: 'art', looks: 'Art', lang: 'de', friend: false, de: 'Kunst', note: '„Die Art und Weise“ heißt „la manière“.' },
  { fr: 'brave', looks: 'brav', lang: 'de', friend: false, de: 'mutig', note: '„Brav“ (artig) heißt „sage“.', forms: 'braves' },
  { fr: 'gymnase', looks: 'Gymnasium', lang: 'de', friend: false, de: 'Turnhalle', note: 'Das Gymnasium heißt „le lycée“.' },
  { fr: 'dose', looks: 'Dose', lang: 'de', friend: false, de: 'Dosis', note: 'Eine Blechdose heißt „une boîte“.' },
  { fr: 'folie', looks: 'Folie', lang: 'de', friend: false, de: 'Wahnsinn', note: '„C’est la folie !“ = Das ist verrückt! Frischhaltefolie heißt „film plastique“.' },
  { fr: 'jalousie', looks: 'Jalousie', lang: 'de', friend: false, de: 'Eifersucht', note: 'Der Rollladen heißt „le store“.' },
  { fr: 'compas', looks: 'Kompass', lang: 'de', friend: false, de: 'Zirkel', note: 'Der Kompass heißt „la boussole“.' },
  { fr: 'veste', looks: 'Weste', lang: 'de', friend: false, de: 'Jacke', note: 'Die Weste heißt „le gilet“.' },
  { fr: 'pile', looks: 'Pille', lang: 'de', friend: false, de: 'Batterie', note: 'Die Pille heißt „la pilule“.', forms: 'piles' },
  { fr: 'rat', looks: 'Rat', lang: 'de', friend: false, de: 'Ratte', note: 'Ein guter Rat heißt „un conseil“.' },
  { fr: 'délicatesse', looks: 'Delikatesse', lang: 'de', friend: false, de: 'Feingefühl, Takt', note: 'Eine Delikatesse (Essen) heißt „un mets fin“.' },
  { fr: 'baiser', looks: 'Baiser', lang: 'de', friend: false, de: 'Kuss', note: 'Als Nomen: Kuss. Das Gebäck heißt „une meringue“. Als Verb ist es umgangssprachlich vulgär!' },
  { fr: 'état', looks: 'Etat', lang: 'de', friend: false, de: 'Zustand / Staat', note: 'Das Budget heißt „le budget“.' },
  { fr: 'chance', looks: 'Chance', lang: 'de', friend: true, de: 'Glück + Gelegenheit', note: 'Halber Freund: „Bonne chance !“ = Viel Glück!' },
  { fr: 'bureau', looks: 'Büro', lang: 'de', friend: true, de: 'Büro und Schreibtisch', note: 'Halber Freund: auch der Schreibtisch.' },

  // Faux amis anglais
  { fr: 'actuellement', looks: 'actually', lang: 'en', friend: false, de: 'derzeit', note: '„Actually“ heißt „en fait“. Das deutsche „aktuell“ hilft hier!' },
  { fr: 'éventuellement', looks: 'eventually', lang: 'en', friend: false, de: 'eventuell', note: 'Das Deutsche rettet dich: wie „eventuell“, nicht wie „eventually“.' },
  { fr: 'attendre', looks: 'attend', lang: 'en', friend: false, de: 'warten', note: '„J’attends le bus“ = Ich warte auf den Bus.', forms: 'attends,attend,attendons,attendez,attendent,attendu' },
  { fr: 'assister', looks: 'assist', lang: 'en', friend: false, de: 'teilnehmen (an)', note: '„Assister à un concert“ = bei einem Konzert dabei sein.' },
  { fr: 'librairie', looks: 'library', lang: 'en', friend: false, de: 'Buchhandlung', note: 'Die Bibliothek heißt „la bibliothèque“.' },
  { fr: 'sensible', looks: 'sensible', lang: 'en', friend: false, de: 'empfindlich, sensibel', note: 'Das Deutsche hilft: „sensibel“, nicht „vernünftig“.' },
  { fr: 'location', looks: 'location', lang: 'en', friend: false, de: 'Miete', note: '„Location de vélos“ = Fahrradverleih.' },
  { fr: 'blesser', looks: 'bless', lang: 'en', friend: false, de: 'verletzen', note: '„Il est blessé“ = Er ist verletzt.', forms: 'blessé,blessée' },
  { fr: 'coin', looks: 'coin', lang: 'en', friend: false, de: 'Ecke', note: 'Die Münze heißt „la pièce“.' },
  { fr: 'demander', looks: 'demand', lang: 'en', friend: false, de: 'fragen, bitten', note: '„Je demande“ = Ich frage – ganz harmlos.', forms: 'demande,demandes,demandons,demandez,demandent,demandé' },

  // Faux gallicismes : sehen französisch aus, sind es aber nicht
  { fr: 'Friseur', looks: 'Friseur', lang: 'de', friend: false, fake: true, de: 'coiffeur', note: 'Kein französisches Wort! Man sagt „le coiffeur“. „Friser“ heißt locken.' },
  { fr: 'Blamage', looks: 'Blamage', lang: 'de', friend: false, fake: true, de: 'la honte', note: 'Gibt es auf Französisch nicht. „Blâmer“ heißt tadeln.' },
  { fr: 'Gardine', looks: 'Gardine', lang: 'de', friend: false, fake: true, de: 'le rideau', note: 'Eine deutsche Erfindung. Der Vorhang heißt „le rideau“.' },
  { fr: 'Jour fixe', looks: 'Jour fixe', lang: 'de', friend: false, fake: true, de: 'réunion régulière', note: 'In Frankreich sagt das so niemand.' },

  // Vrais amis (pour l'équilibre du jeu)
  { fr: 'trottoir', looks: 'Trottoir', lang: 'de', friend: true, de: 'Bürgersteig', note: 'Echter Freund.' },
  { fr: 'portemonnaie', looks: 'Portemonnaie', lang: 'de', friend: true, de: 'Geldbörse', note: 'Echter Freund, geschrieben „porte-monnaie“.' },
  { fr: 'étage', looks: 'Etage', lang: 'de', friend: true, de: 'Etage', note: 'Echter Freund.' },
  { fr: 'kiosque', looks: 'Kiosk', lang: 'de', friend: true, de: 'Kiosk', note: 'Echter Freund.' },
  { fr: 'oncle', looks: 'Onkel', lang: 'de', friend: true, de: 'Onkel', note: 'Echter Freund.' },
  { fr: 'balcon', looks: 'Balkon', lang: 'de', friend: true, de: 'Balkon', note: 'Echter Freund.' },
  { fr: 'chauffeur', looks: 'Chauffeur', lang: 'de', friend: true, de: 'Fahrer', note: 'Echter Freund – in Frankreich ist jeder Autofahrer ein „chauffeur“.' },
  { fr: 'abonnement', looks: 'Abonnement', lang: 'de', friend: true, de: 'Abonnement', note: 'Echter Freund.' },
  { fr: 'terrasse', looks: 'Terrasse', lang: 'de', friend: true, de: 'Terrasse', note: 'Echter Freund – „en terrasse“ = draußen im Café.' },
  { fr: 'parfum', looks: 'Parfüm', lang: 'de', friend: true, de: 'Parfüm, auch Geschmack', note: 'Freund – beim Eis heißt „parfum“ Geschmackssorte!' },
  { fr: 'tante', looks: 'Tante', lang: 'de', friend: true, de: 'Tante', note: 'Echter Freund.' },
  { fr: 'niveau', looks: 'Niveau', lang: 'de', friend: true, de: 'Niveau, Stufe', note: 'Echter Freund.' },
  { fr: 'garderobe', looks: 'Garderobe', lang: 'de', friend: true, de: 'Kleiderschrank, Garderobe', note: 'Fast echter Freund, geschrieben „garde-robe“.' },
];
