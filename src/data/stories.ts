// Narrow stories : mêmes personnages, vocabulaire recyclé, couverture élevée.
// gloss : mots absents du lexique. Préfixe "=" : mot transparent (cognat) pour une germanophone.

export interface Story {
  id: string;
  title: string;
  de: string; // titre allemand
  text: string;
  gloss: Record<string, string>;
  q: { de: string; options: string[]; answer: number };
}

// Noms propres et mots partagés par toutes les histoires
export const NAMES: Record<string, string> = {
  lena: 'Lena (Name)', hugo: 'Hugo (Name)', minou: 'Minou (Name des Katers, „Miezi“)', roux: 'Roux (Nachname)',
  madame: '=Frau / Madame', toulouse: 'Toulouse (Stadt)', paris: 'Paris', berlin: 'Berlin', cologne: 'Köln',
  france: 'Frankreich', euros: '=Euro', euro: '=Euro', français: 'Französisch / französisch', allemande: 'Deutsche (Frau)',
  frappe: 'klopft', valise: 'Koffer', porte: 'Tür',
};

export const STORIES: Story[] = [
  {
    id: 'arrivee', title: 'Lena arrive à Toulouse', de: 'Lena kommt in Toulouse an',
    text: `Lena est allemande. Elle habite à Cologne, mais aujourd'hui, elle arrive à Toulouse. Elle va travailler ici pendant un an. Toulouse est une grande ville, au sud de la France. Il fait chaud. Lena a une petite valise et un sac. Elle cherche son adresse : 12, rue des Lilas. C'est un vieux bâtiment, avec un petit balcon au troisième étage. Sur le balcon, il y a un chat. Il regarde Lena. « Bonjour, toi ! » dit Lena. Le chat ne répond pas. Il dort.`,
    gloss: { sud: 'Süden', sac: 'Tasche', lilas: 'Flieder', bâtiment: 'Gebäude', troisième: 'dritte' },
    q: { de: 'Wo ist der Kater?', options: ['Auf dem Balkon', 'Im Café', 'Im Zug'], answer: 0 },
  },
  {
    id: 'voisin', title: 'Le voisin', de: 'Der Nachbar',
    text: `Le lendemain matin, quelqu'un frappe à la porte. C'est le voisin. Il s'appelle Hugo. Il est grand, il a trente ans et il est très sympa. « Bonjour ! Tu es la nouvelle voisine ? Moi, c'est Hugo. Et le chat, c'est Minou. Il est pas à moi, il est à tout le monde. » Lena rigole. Hugo parle vite, mais elle comprend presque tout. « Tu veux un café ? » demande Hugo. « Oui, avec plaisir ! » Ils boivent un café sur la terrasse. Minou arrive aussi. Il veut du lait.`,
    gloss: { lendemain: 'nächster Tag', trente: 'dreißig', rigole: 'lacht', presque: 'fast', plaisir: 'Vergnügen', lait: 'Milch' },
    q: { de: 'Wem gehört der Kater?', options: ['Hugo', 'Allen', 'Lena'], answer: 1 },
  },
  {
    id: 'marche', title: 'Au marché', de: 'Auf dem Markt',
    text: `Samedi, Hugo et Lena vont au marché. Il y a beaucoup de gens et beaucoup de couleurs : des tomates, des oranges, des citrons, du fromage, du pain. Lena adore les marchés. Elle achète des fruits et un petit fromage. « Combien ça coûte ? » demande Lena. « Quatre euros, madame. » Hugo achète du vin pour ce soir. « Ce soir, on mange chez moi, d'accord ? » dit Hugo. « D'accord ! Mais je sais pas cuisiner », dit Lena. « C'est pas grave. Moi, je cuisine. Toi, tu apportes le dessert. »`,
    gloss: { samedi: 'Samstag', couleurs: '=Farben (colours)', fromage: 'Käse', coûte: '=kostet (cost)', quatre: 'vier', cuisiner: 'kochen', cuisine: 'koche / Küche', grave: 'schlimm', apportes: 'bringst mit', dessert: '=Dessert, Nachtisch' },
    q: { de: 'Was macht Lena für heute Abend?', options: ['Sie kocht', 'Sie bringt den Nachtisch', 'Sie kauft Wein'], answer: 1 },
  },
  {
    id: 'cafe', title: 'Le café de Madame Roux', de: 'Das Café von Madame Roux',
    text: `En bas de la rue, il y a un petit café. La patronne s'appelle Madame Roux. Elle a soixante ans et elle connaît tout le quartier. Chaque matin, Lena prend un café et un croissant en terrasse. Madame Roux parle beaucoup. Elle raconte des histoires sur les voisins, sur la ville, sur son ancien chat. Au début, Lena comprenait rien. Maintenant, elle comprend presque tout. « Vous parlez bien français maintenant ! » dit Madame Roux. Lena est contente. C'est pas vrai, mais c'est gentil.`,
    gloss: { bas: 'unten', patronne: 'Chefin, Wirtin', soixante: 'sechzig', quartier: '=Viertel (Quartier)', croissant: '=Croissant', raconte: 'erzählt', ancien: 'ehemalig, alt', début: 'Anfang', comprenait: 'verstand', presque: 'fast', gentil: 'nett' },
    q: { de: 'Was denkt Lena über das Kompliment?', options: ['Es stimmt genau', 'Es stimmt nicht ganz, ist aber nett', 'Sie versteht es nicht'], answer: 1 },
  },
  {
    id: 'disparu', title: 'Minou a disparu', de: 'Minou ist verschwunden',
    text: `Un soir, Hugo frappe chez Lena. Il est nerveux. « Tu as vu Minou ? Il est pas sur le balcon. Il est pas chez Madame Roux. Il a disparu ! » Lena et Hugo cherchent partout : dans la rue, dans le garage, derrière le restaurant. Rien. Il fait nuit. Hugo est triste. Puis Lena entend un petit bruit. Ça vient de sa valise ! Elle ouvre la valise… et Minou est là, dans ses pulls. Il dort. « Ce chat est un génie, dit Hugo. Il voulait partir en voyage avec toi. »`,
    gloss: { disparu: 'verschwunden', partout: 'überall', triste: 'traurig', entend: 'hört', bruit: 'Geräusch', pulls: '=Pullis', génie: '=Genie' },
    q: { de: 'Wo war Minou?', options: ['In der Garage', 'Im Koffer', 'Bei Madame Roux'], answer: 1 },
  },
  {
    id: 'mer', title: 'Le voyage à la mer', de: 'Die Reise ans Meer',
    text: `Au mois de juillet, Lena, Hugo et Madame Roux vont à la mer. Ils prennent le train à sept heures du matin. Minou reste à la maison, avec la voisine du premier étage. La plage est grande et l'eau est froide, mais Lena va nager quand même. Hugo reste sur sa serviette : il dit que l'eau est trop froide. Madame Roux a préparé des sandwichs et une salade. Le soir, ils regardent le soleil sur la mer. « Tu restes à Toulouse l'année prochaine ? » demande Hugo. Lena pense. Puis elle sourit. « Oui. Je crois que je reste. »`,
    gloss: { juillet: '=Juli', sept: 'sieben', plage: 'Strand', nager: 'schwimmen', même: 'trotzdem (quand même)', serviette: '=Handtuch (Serviette)', sandwichs: '=Sandwiches', soleil: 'Sonne', prochaine: 'nächste', sourit: 'lächelt' },
    q: { de: 'Bleibt Lena in Toulouse?', options: ['Ja', 'Nein', 'Sie weiß es noch nicht'], answer: 0 },
  },
];

// Spiel „Wörter-Detektiv“ : textes denses en cognats
export const DETEKTIV: Story[] = [
  {
    id: 'universite', title: 'Le président à l’université', de: 'Nachrichten',
    text: `Le président de la République visite une université à Toulouse. Il parle de la situation économique, de l'énergie et de la culture. Les étudiants posent beaucoup de questions sur le climat et sur le tourisme. La discussion est intéressante, mais la conférence est très longue.`,
    gloss: { économique: '=ökonomisch', posent: 'stellen', climat: '=Klima', discussion: '=Diskussion', longue: '=lang (long)' },
    q: { de: 'Worüber spricht der Präsident?', options: ['Über Sport', 'Über Wirtschaft, Energie und Kultur', 'Über seine Familie'], answer: 1 },
  },
  {
    id: 'menu', title: 'Menu du jour', de: 'Speisekarte',
    text: `Restaurant Le Capitole. Menu du jour : salade de tomates, soupe de légumes, poulet avec sauce à la crème, dessert au chocolat. Café ou thé. Prix : quinze euros. Service et boisson compris. Réservation recommandée.`,
    gloss: { capitole: 'Capitole (Name)', légumes: 'Gemüse', poulet: 'Hähnchen', sauce: '=Soße', crème: '=Creme, Sahne', dessert: '=Dessert', prix: '=Preis (price)', quinze: 'fünfzehn', service: '=Service', boisson: 'Getränk', compris: 'inbegriffen', réservation: '=Reservierung', recommandée: '=empfohlen (recommended)' },
    q: { de: 'Was ist im Preis inbegriffen?', options: ['Service und Getränk', 'Nur das Dessert', 'Nichts'], answer: 0 },
  },
  {
    id: 'meteo', title: 'Météo', de: 'Wetterbericht',
    text: `Météo de demain : température de vingt-cinq degrés à Toulouse. Situation calme dans le centre de la France. Attention : danger de tempête sur la côte atlantique. La police recommande de ne pas utiliser la voiture. Le soleil revient dimanche.`,
    gloss: { météo: 'Wetter (Meteo-)', vingt: 'zwanzig', cinq: 'fünf', degrés: '=Grad (degrees)', danger: '=Gefahr (danger)', tempête: '=Sturm (tempest)', côte: '=Küste (coast)', atlantique: '=atlantisch', recommande: '=empfiehlt (recommends)', soleil: 'Sonne', revient: 'kommt zurück', dimanche: 'Sonntag' },
    q: { de: 'Was empfiehlt die Polizei?', options: ['Ans Meer fahren', 'Das Auto nicht benutzen', 'Zu Hause schlafen'], answer: 1 },
  },
  {
    id: 'annonce', title: 'Petite annonce', de: 'Kleinanzeige',
    text: `À louer : appartement moderne au centre de Toulouse. Deuxième étage avec balcon et terrasse. Cuisine équipée, salle de bains, garage. Calme, près de l'université et du métro. Idéal pour étudiant ou couple. Contact par téléphone ou par mail.`,
    gloss: { louer: 'vermieten', appartement: '=Appartement, Wohnung', deuxième: 'zweite', cuisine: 'Küche', équipée: '=ausgestattet (equipped)', salle: '=Saal / Raum', bains: '=Bad (bath)', métro: '=Metro, U-Bahn', idéal: '=ideal', couple: '=Paar (couple)', contact: '=Kontakt', téléphone: '=Telefon', mail: '=Mail' },
    q: { de: 'Für wen ist die Wohnung ideal?', options: ['Für eine große Familie', 'Für Studenten oder Paare', 'Für Touristen'], answer: 1 },
  },
];
