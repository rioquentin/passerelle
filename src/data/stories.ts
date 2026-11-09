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
  frappe: 'klopft', capitole: 'Capitole (Platz in Toulouse)',
};

export const STORIES: Story[] = [
  {
    id: 'arrivee', title: 'Lena arrive à Toulouse', de: 'Lena kommt in Toulouse an',
    text: `Lena est allemande. Elle habite à Cologne, mais aujourd'hui, elle arrive à Toulouse. Elle va travailler ici pendant un an. Toulouse est une grande ville, au sud de la France. Il fait chaud. Lena a une petite valise et un sac. Elle cherche son adresse : 12, rue des Lilas. C'est un vieux bâtiment, avec un petit balcon au troisième étage. Sur le balcon, il y a un chat. Il regarde Lena. « Bonjour, toi ! » dit Lena. Le chat ne répond pas. Il dort. Lena monte au troisième étage. La valise est lourde ! L'appartement est petit, mais il y a beaucoup de soleil. Elle ouvre la fenêtre et regarde la ville. Sur le balcon, juste à côté, le chat dort toujours. « Bon, dit Lena, on va être voisins. »`,
    gloss: { sud: 'Süden', lilas: 'Flieder', troisième: 'dritte', juste: 'direkt, gleich' },
    q: { de: 'Wo ist der Kater?', options: ['Auf dem Balkon', 'Im Café', 'Im Zug'], answer: 0 },
  },
  {
    id: 'voisin', title: 'Le voisin', de: 'Der Nachbar',
    text: `Le lendemain matin, quelqu'un frappe à la porte. C'est le voisin. Il s'appelle Hugo. Il est grand, il a trente ans et il est très sympa. « Bonjour ! Tu es la nouvelle voisine ? Moi, c'est Hugo. Et le chat, c'est Minou. Il est pas à moi, il est à tout le monde. » Lena rigole. Hugo parle vite, mais elle comprend presque tout. « Tu veux un café ? » demande Hugo. « Oui, avec plaisir ! » Ils boivent un café sur la terrasse. Hugo raconte : il est ingénieur, il travaille à l'aéroport. Il aime la musique et le vélo. Lena explique qu'elle travaille dans une école de langues. « Une Allemande ! dit Hugo. Ma grand-mère était allemande. Mais moi, je parle pas un mot d'allemand. » Minou arrive aussi. Il veut du lait.`,
    gloss: { rigole: 'lacht', plaisir: 'Vergnügen', langues: '=Sprachen (languages)', grand: 'groß („grand-mère“ = Großmutter)', allemand: 'Deutsch' },
    q: { de: 'Wem gehört der Kater?', options: ['Hugo', 'Allen', 'Lena'], answer: 1 },
  },
  {
    id: 'marche', title: 'Au marché', de: 'Auf dem Markt',
    text: `Samedi, Hugo et Lena vont au marché. Il y a beaucoup de gens et beaucoup de couleurs : des tomates, des oranges, des citrons, du fromage, du pain. Lena adore les marchés. Elle achète des fruits et un petit fromage. « Combien ça coûte ? » demande Lena. « Quatre euros, madame. » Hugo achète du vin pour ce soir. « Ce soir, on mange chez moi, d'accord ? » dit Hugo. « D'accord ! Mais je sais pas cuisiner », dit Lena. « C'est pas grave. Moi, je cuisine. Toi, tu apportes le dessert. » Le soir, Lena arrive chez Hugo avec un gros gâteau au chocolat. Elle l'a acheté à la boulangerie. « Tu as fait ce gâteau ? » demande Hugo avec un sourire. « Non, dit Lena. Mais je l'ai très bien choisi ! »`,
    gloss: { grave: 'schlimm', cuisine: 'koche' },
    q: { de: 'Was macht Lena für den Abend?', options: ['Sie kocht', 'Sie bringt den Nachtisch', 'Sie kauft Wein'], answer: 1 },
  },
  {
    id: 'cafe', title: 'Le café de Madame Roux', de: 'Das Café von Madame Roux',
    text: `En bas de la rue, il y a un petit café. La patronne s'appelle Madame Roux. Elle a soixante ans et elle connaît tout le quartier. Chaque matin, Lena prend un café et un croissant en terrasse. Madame Roux parle beaucoup. Elle raconte des histoires sur les voisins, sur la ville, sur son ancien chat. Au début, Lena comprenait rien. Maintenant, elle comprend presque tout. « Vous parlez bien français maintenant ! » dit Madame Roux. Lena est contente. C'est pas vrai, mais c'est gentil. Un jour, Madame Roux demande : « Vous voulez travailler ici le samedi matin ? J'ai besoin d'aide. » Lena hésite, puis elle dit oui. Maintenant, le samedi, elle sert les cafés et les croissants. Elle apprend beaucoup de mots.`,
    gloss: { patronne: 'Chefin, Wirtin', comprenait: 'verstand', besoin: 'Bedarf („avoir besoin de“ = brauchen)', hésite: '=zögert (hesitates)', sert: 'serviert' },
    q: { de: 'Was denkt Lena über das Kompliment?', options: ['Es stimmt genau', 'Es stimmt nicht ganz, ist aber nett', 'Sie versteht es nicht'], answer: 1 },
  },
  {
    id: 'disparu', title: 'Minou a disparu', de: 'Minou ist verschwunden',
    text: `Un soir, Hugo frappe chez Lena. Il est nerveux. « Tu as vu Minou ? Il est pas sur le balcon. Il est pas chez Madame Roux. Il a disparu ! » Lena et Hugo cherchent partout : dans la rue, dans le garage, derrière le restaurant. Rien. Ils demandent à Madame Roux, au boulanger, aux enfants dans la rue. Personne n'a vu le chat. Il fait nuit. Hugo est triste. Puis Lena entend un petit bruit. Ça vient de sa valise ! Elle ouvre la valise… et Minou est là, dans ses pulls. Il dort. « Ce chat est un génie, dit Hugo. Il voulait partir en voyage avec toi. »`,
    gloss: { disparu: 'verschwunden', boulanger: 'Bäcker', bruit: 'Geräusch', génie: '=Genie' },
    q: { de: 'Wo war Minou?', options: ['In der Garage', 'Im Koffer', 'Bei Madame Roux'], answer: 1 },
  },
  {
    id: 'velo', title: 'Un vélo pour Lena', de: 'Ein Fahrrad für Lena',
    text: `Lena veut un vélo. À Toulouse, il fait souvent beau et la ville n'est pas très grande. Hugo connaît un magasin près de la gare. Le vendeur est un vieux monsieur avec des lunettes. Il montre trois vélos : un rouge, un bleu et un vert. Le rouge est joli, mais il est trop cher. Le bleu est vieux, mais il ne coûte que quatre-vingts euros. « Vous pouvez l'essayer », dit le monsieur. Lena monte sur le vélo et fait le tour de la place. Elle rit. C'est facile ! Elle achète le vélo bleu. Le lendemain, elle va au travail à vélo. Il y a du vent, mais elle arrive à l'heure. Madame Roux la voit passer devant le café. « Bravo, Lena ! Maintenant, vous êtes une vraie Toulousaine ! »`,
    gloss: { vendeur: 'Verkäufer', vingts: 'zwanzig („quatre-vingts“ = achtzig)', tour: '=Tour, Runde', bravo: '=Bravo', toulousaine: 'Toulouserin' },
    q: { de: 'Welches Fahrrad kauft Lena?', options: ['Das rote', 'Das blaue', 'Das grüne'], answer: 1 },
  },
  {
    id: 'pluie', title: 'Un dimanche de pluie', de: 'Ein Regensonntag',
    text: `Dimanche, il pleut. Il fait froid et le ciel est gris. Lena reste à la maison. Elle lit un livre en français, mais c'est difficile. Vers midi, Hugo frappe à la porte. Il a un grand sac. « Il pleut, on peut rien faire dehors. Alors, on cuisine ! » Dans le sac, il y a des légumes, des œufs, du fromage et une bouteille de vin. Hugo prépare une omelette et Lena fait une salade. Minou arrive aussi. Il est tout mouillé. Il veut du poisson, mais il n'y a pas de poisson. L'après-midi, ils regardent un vieux film à la télévision. Lena comprend presque tout, parce que les acteurs parlent lentement. Le soir, la pluie s'arrête. « Tu vois, dit Hugo, un dimanche de pluie, c'est pas si mal. »`,
    gloss: { gris: 'grau', bouteille: '=Flasche (bottle)', omelette: '=Omelett', mouillé: 'nass', acteurs: '=Schauspieler (actors)', lentement: 'langsam', si: 'so („pas si mal“ = gar nicht so schlecht)' },
    q: { de: 'Was machen Lena und Hugo am Regentag?', options: ['Sie gehen ans Meer', 'Sie fahren Fahrrad', 'Sie kochen und schauen einen Film'], answer: 2 },
  },
  {
    id: 'anniversaire', title: "L'anniversaire de Madame Roux", de: 'Der Geburtstag von Madame Roux',
    text: `Le quinze mai, c'est l'anniversaire de Madame Roux. Elle a soixante-cinq ans. Hugo a une idée : une fête surprise au café ! Il en parle à tout le quartier. Le matin, Lena et Hugo achètent des fleurs et un gros gâteau. Les voisins apportent du champagne et des cadeaux. À midi, Madame Roux arrive au café. Il fait noir. Puis tout le monde crie : « Surprise ! Joyeux anniversaire ! » Madame Roux a les larmes aux yeux. « Mais vous êtes fous ! » dit-elle. Elle rit et elle pleure en même temps. Lena lui donne son cadeau : une photo de Minou sur le balcon. « Le chat que tout le monde aime », dit Lena. Madame Roux sourit. « C'est le plus beau cadeau. »`,
    gloss: { anniversaire: 'Geburtstag', surprise: '=Überraschung (surprise)', noir: 'dunkel („il fait noir“)', crie: 'ruft laut', joyeux: 'fröhlich („joyeux anniversaire“ = alles Gute zum Geburtstag)', larmes: 'Tränen', fous: 'verrückt', temps: 'Zeit („en même temps“ = gleichzeitig)', plus: 'am („le plus beau“ = das schönste)' },
    q: { de: 'Was schenkt Lena Madame Roux?', options: ['Ein Foto von Minou', 'Blumen', 'Champagner'], answer: 0 },
  },
  {
    id: 'visite', title: 'La visite de la mère', de: 'Besuch von Mama',
    text: `En juin, la mère de Lena vient de Cologne. Elle parle pas français. Lena va la chercher à la gare. Elles se promènent dans la ville : la place du Capitole, la rivière, les petites rues. Au marché, la mère veut acheter du fromage. Le vendeur parle très vite. Lena traduit tout. « Tu comprends tout ça ? » demande sa mère en allemand. Lena réfléchit. Il y a quelques mois, elle comprenait rien. Maintenant, elle comprend presque tout. Le soir, elles mangent chez Hugo. Hugo parle un peu allemand : « Guten Abend ! Willkommen ! » La mère de Lena rit. Elle trouve Hugo très sympa. Plus tard, elle dit à Lena : « Il est gentil, ton voisin… » Et Lena devient toute rouge.`,
    gloss: { promènent: 'gehen spazieren', rivière: 'Fluss', vendeur: 'Verkäufer', traduit: 'übersetzt', allemand: 'Deutsch', réfléchit: 'überlegt', comprenait: 'verstand', guten: '=Guten (Deutsch!)', abend: '=Abend (Deutsch!)', willkommen: '=Willkommen (Deutsch!)', plus: 'mehr („plus tard“ = später)' },
    q: { de: 'Was denkt Lenas Mutter über Hugo?', options: ['Er spricht zu schnell', 'Er ist nett', 'Sie mag ihn nicht'], answer: 1 },
  },
  {
    id: 'mer', title: 'Le voyage à la mer', de: 'Die Reise ans Meer',
    text: `Au mois de juillet, Lena, Hugo et Madame Roux vont à la mer. Ils prennent le train à sept heures du matin. Minou reste à la maison, avec la voisine du premier étage. La plage est grande et l'eau est froide, mais Lena va nager quand même. Hugo reste sur sa serviette : il dit que l'eau est trop froide. Sur la plage, il y a beaucoup de familles avec des enfants. Madame Roux raconte : quand elle était petite, elle venait ici avec ses parents, chaque été. Elle a préparé des sandwichs et une salade. Le soir, ils regardent le soleil sur la mer. « Tu restes à Toulouse l'année prochaine ? » demande Hugo. Lena pense. Puis elle sourit. « Oui. Je crois que je reste. »`,
    gloss: { serviette: '=Handtuch (Serviette)', été: 'Sommer', sandwichs: '=Sandwiches' },
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
