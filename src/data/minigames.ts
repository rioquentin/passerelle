// Spiel 5 « Révélation mot par mot » et spiel 7 « Chasse au son ».

export interface RevealItem {
  fr: string;
  q: string;
  opts: [string, string, string]; // la première est la bonne (mélangées à l'affichage)
  gloss: Record<string, string>;
}

export const REVEAL: RevealItem[] = [
  { fr: 'Le train pour Paris a une heure de retard.', q: 'Worum geht es?', opts: ['Der Zug ist verspätet', 'Der Zug ist voll', 'Der Zug ist billig'], gloss: { retard: 'Verspätung' } },
  { fr: 'Le musée est fermé le lundi, mais il est ouvert le dimanche.', q: 'Wann kann man ins Museum?', opts: ['Am Sonntag', 'Am Montag', 'Nie'], gloss: {} },
  { fr: 'Attention, le chien est dangereux !', q: 'Was ist das?', opts: ['Eine Warnung', 'Eine Einladung', 'Ein Rezept'], gloss: {} },
  { fr: 'Je voudrais une table pour deux personnes ce soir.', q: 'Wo hört man diesen Satz?', opts: ['Im Restaurant', 'Im Möbelgeschäft', 'Im Zug'], gloss: { personnes: '=Personen' } },
  { fr: 'Il pleut depuis trois jours et il fait froid.', q: 'Worum geht es?', opts: ['Schlechtes Wetter', 'Ein Fest', 'Ein Unfall'], gloss: {} },
  { fr: "Bon anniversaire ! On t'a préparé un gâteau au chocolat.", q: 'Was wird gefeiert?', opts: ['Ein Geburtstag', 'Eine Hochzeit', 'Ein Abschied'], gloss: { anniversaire: 'Geburtstag', gâteau: 'Kuchen' } },
  { fr: 'La pharmacie est à droite, après la banque.', q: 'Was passiert hier?', opts: ['Jemand erklärt den Weg', 'Jemand nennt einen Preis', 'Jemand ist krank'], gloss: { pharmacie: '=Apotheke (Pharmazie)', droite: 'rechts' } },
  { fr: 'Le concert est annulé à cause de la tempête.', q: 'Was ist mit dem Konzert?', opts: ['Es fällt aus', 'Es war super', 'Es ist ausverkauft'], gloss: { concert: '=Konzert', annulé: '=abgesagt (annulliert)', cause: 'Grund („à cause de“ = wegen)', tempête: '=Sturm (tempest)' } },
  { fr: "Mon fils a eu une excellente note à l'école.", q: 'Wie ist die Nachricht?', opts: ['Gut – es geht um die Schule', 'Schlecht – es gibt ein Problem', 'Es geht um Musik'], gloss: { note: '=Note (Schulnote)' } },
  { fr: 'Désolé, je suis en retard, il y avait beaucoup de circulation.', q: 'Was sagt die Person?', opts: ['Sie entschuldigt sich für die Verspätung', 'Sie lädt jemanden ein', 'Sie macht ein Kompliment'], gloss: { désolé: 'tut mir leid', retard: 'Verspätung („en retard“ = zu spät)', circulation: '=Verkehr (Zirkulation)' } },
  { fr: 'Le magasin fait des réductions de cinquante pour cent sur tous les vêtements.', q: 'Worum geht es?', opts: ['Um einen Ausverkauf', 'Um eine Schließung', 'Um eine Stelle'], gloss: { magasin: 'Laden (Magazin)', réductions: '=Reduzierungen, Rabatte', cinquante: 'fünfzig', cent: '=Prozent („pour cent“)' } },
  { fr: 'Elle a perdu son téléphone dans le métro.', q: 'Was ist passiert?', opts: ['Sie hat etwas verloren', 'Sie hat etwas gekauft', 'Sie hat jemanden angerufen'], gloss: {} },
  { fr: 'Nous cherchons un appartement avec deux chambres près du centre.', q: 'Was suchen sie?', opts: ['Eine Wohnung', 'Ein Hotel', 'Eine Arbeit'], gloss: {} },
  { fr: 'Le docteur dit que je dois rester au lit trois jours.', q: 'Wie geht es der Person?', opts: ['Sie ist krank', 'Sie hat Urlaub', 'Sie zieht um'], gloss: {} },
  { fr: 'Ce film est trop long et un peu ennuyeux.', q: 'Was denkt die Person über den Film?', opts: ['Er gefällt ihr nicht so', 'Er ist großartig', 'Sie will ihn nochmal sehen'], gloss: { ennuyeux: 'langweilig' } },
  { fr: 'Le petit déjeuner est servi de sept heures à dix heures.', q: 'Was ist das?', opts: ['Frühstückszeiten', 'Ein Zugfahrplan', 'Öffnungszeiten eines Museums'], gloss: { servi: '=serviert' } },
  { fr: 'Hugo a gagné au loto, mais il a perdu le billet !', q: 'Wie ist Hugos Lage?', opts: ['Glück und Pech zugleich', 'Nur Glück', 'Er hat Streit'], gloss: { loto: '=Lotto' } },
  { fr: 'Il est interdit de fumer dans le bâtiment.', q: 'Was ist das?', opts: ['Ein Verbot', 'Eine Erlaubnis', 'Ein Angebot'], gloss: { interdit: 'verboten', fumer: 'rauchen', bâtiment: 'Gebäude' } },
];

export interface HuntItem {
  fr: string;
  target: string;
  n: number; // combien de fois le mot cible apparaît
  note?: string;
}

export const HUNT: HuntItem[] = [
  { fr: "Je sais pas, c'est pas facile.", target: 'pas', n: 2 },
  { fr: 'Il vient pas ce soir.', target: 'pas', n: 1 },
  { fr: 'On mange au restaurant ce soir.', target: 'pas', n: 0 },
  { fr: 'Tu veux pas venir ? Pas de problème.', target: 'pas', n: 2 },
  { fr: "C'est parfait, merci beaucoup.", target: 'pas', n: 0, note: '„parfait“ beginnt ähnlich, ist aber ein anderes Wort.' },
  { fr: 'Elle part pas demain.', target: 'pas', n: 1, note: '„part“ (fährt ab) klingt wie „par“ – das „pas“ kommt danach.' },
  { fr: 'On y va ? On est en retard !', target: 'on', n: 2 },
  { fr: 'Ce soir, on mange chez Hugo.', target: 'on', n: 1 },
  { fr: 'On a vu Minou sur le balcon.', target: 'on', n: 1, note: '„on a“ klingt wie ein Wort: „onna“.' },
  { fr: 'Ils ont un chat et un chien.', target: 'on', n: 0, note: 'Falle! „ils ont“ (sie haben) klingt fast wie „il-zon“. Das ist „ont“, nicht „on“.' },
  { fr: 'Ils sont où ?', target: 'on', n: 0, note: '„sont“ endet auf denselben Laut – ist aber „sind“.' },
  { fr: 'Je comprends rien.', target: 'rien', n: 1 },
  { fr: 'Rien de grave, ça va bien.', target: 'rien', n: 1, note: '„bien“ reimt sich auf „rien“ – nur der erste Laut ist anders.' },
  { fr: 'Merci ! – De rien.', target: 'rien', n: 1, note: '„De rien“ = gern geschehen.' },
  { fr: 'Il dit rien, il mange rien.', target: 'rien', n: 2 },
  { fr: 'Elle va bien, merci.', target: 'rien', n: 0, note: '„bien“, nicht „rien“.' },
  { fr: 'Je suis jamais allée à Paris.', target: 'jamais', n: 1 },
  { fr: "Il est toujours en retard, jamais à l'heure.", target: 'jamais', n: 1 },
  { fr: 'Jamais, jamais, jamais !', target: 'jamais', n: 3 },
  { fr: 'Elle part demain matin.', target: 'jamais', n: 0 },
  { fr: "C'est très bon, très très bon !", target: 'très', n: 3 },
  { fr: 'Il fait très chaud.', target: 'très', n: 1 },
  { fr: 'Tu as déjà mangé ?', target: 'déjà', n: 1 },
  { fr: 'Il est déjà là ? Déjà !', target: 'déjà', n: 2 },
  { fr: 'On part demain.', target: 'déjà', n: 0 },
];
