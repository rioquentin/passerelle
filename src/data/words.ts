// Lexique de base. Format d'une ligne : fr | de | formes fléchies (virgules) | indice
// En-tête de section : "## <genre> <catégorie>"
//   k = Kernwort (opaque, à apprendre)
//   d = transparent par l'allemand
//   e = transparent par l'anglais
//   b = transparent par les deux
// Les faux amis sont dans falsefriends.ts et rejoignent ce lexique au chargement.
// L'ordre des mots-clés suit à peu près la fréquence orale (Lexique, colonne films).

export const RAW = `
## k Begleiter
le|der / die / das|l'|
la|die (weiblich)||
les|die (Mehrzahl)||
un|ein||
une|eine||
des|(Mehrzahl von „ein“) / einige||
du|(etwas) / vom||
ce|dies / das|cet,c'|
cette|diese||
ces|diese (Mehrzahl)||
mon|mein|ma,mes|
ton|dein|ta,tes|
son|sein / ihr|sa,ses|
notre|unser|nos|
votre|euer / Ihr|vos|
leur|ihr (Mehrzahl) / ihnen|leurs|
quel|welcher|quelle,quels,quelles|
tout|alles / ganz|tous,toute,toutes|
autre|andere|autres|
même|selbe / sogar|mêmes|
chaque|jeder||
quelques|einige|quelque|
## k Pronomen
je|ich|j'|
tu|du||
il|er / es||
elle|sie (weiblich)||
on|man / wir||„on“ heißt gesprochen meist „wir“
nous|wir / uns||
vous|ihr / Sie / euch||
ils|sie (Mehrzahl)||
elles|sie (Mehrzahl, weiblich)||
me|mich / mir|m'|
te|dich / dir|t'|
se|sich|s'|
lui|ihm / ihr / er||
moi|ich / mich (betont)||
toi|du / dich (betont)||
eux|sie (betont)||
y|dort / dahin||
en|davon / in||
ça|das|cela|
qui|wer / der, die (Relativ)||
que|dass / was / den|qu'|
quoi|was||
rien|nichts||
quelqu'un|jemand||
chose|Sache / Ding|choses|
## k Präpositionen
à|zu / in / an|au,aux|
de|von / aus|d'|
dans|in||
sur|auf / über||
sous|unter||
avec|mit||
sans|ohne||
pour|für / um zu||
par|durch / von||
chez|bei||chez Hugo = bei Hugo
entre|zwischen||
vers|gegen / Richtung||
après|nach||
avant|vor (Zeit)||
depuis|seit||
pendant|während||
contre|gegen||
devant|vor (Ort)||
derrière|hinter||
près|nahe||
loin|weit||
## k Verneinung
ne|(Verneinung – gesprochen oft weggelassen)|n'|Das sichere Signal ist „pas“, nicht „ne“
pas|nicht||
plus|mehr / nicht mehr||
jamais|nie||
non|nein||
oui|ja||
si|ob / wenn / doch||
## k Verbinder
et|und||
ou|oder||
mais|aber||
donc|also||
alors|dann / also||
parce que|weil|parce|
car|denn||
quand|wenn / wann||
comme|wie / da||
aussi|auch||
puis|dann||
enfin|endlich||
pourtant|trotzdem||
## k Zeit & Ort
maintenant|jetzt||
aujourd'hui|heute||
demain|morgen||
déjà|schon||
encore|noch||
toujours|immer||
souvent|oft||
bientôt|bald||
tard|spät||
tôt|früh||
ici|hier||Vorsicht: „ici“ = hier, aber „hier“ = gestern!
là|da / dort||
où|wo / wohin||
comment|wie||
pourquoi|warum||
combien|wie viel||
## k Menge & Art
très|sehr||
trop|zu (viel)||
beaucoup|viel||
peu|wenig||
moins|weniger||
assez|genug / ziemlich||
bien|gut||
mal|schlecht||
vite|schnell||
peut-être|vielleicht||
vraiment|wirklich||
seulement|nur||
ensemble|zusammen||
## k Verben
être|sein|suis,es,est,sommes,êtes,sont,été,était,étais,étaient,sera,serai,serons,seront,soit,serait,serais|
avoir|haben|ai,as,a,avons,avez,ont,eu,avait,avais,avaient,aura,aurai,aurons,auront,auras|
aller|gehen / fahren|vais,vas,va,allons,allez,vont,allé,allée,allés,allait,ira,irai,iront|„je vais“ + Infinitiv = Zukunft
faire|machen / tun|fais,fait,faisons,faites,font,faisait,fera,ferai|
dire|sagen|dis,dit,disons,dites,disent,disait,dira|
pouvoir|können|peux,peut,pouvons,pouvez,peuvent,pu,pouvait,pourra,pourrait,pourriez,pourrais|
vouloir|wollen|veux,veut,voulons,voulez,veulent,voulu,voulait,voudrais,voudrait|„je voudrais“ = ich hätte gern
savoir|wissen|sais,sait,savons,savez,savent,su,savait,saura|
voir|sehen|vois,voit,voyons,voyez,voient,vu,vue,voyait,verra,verrons|
venir|kommen|viens,vient,venons,venez,viennent,venu,venue,venait,viendra,viendrai|
prendre|nehmen|prends,prend,prenons,prenez,prennent,pris,prise,prenait,prendra|
devoir|müssen|dois,doit,devons,devez,doivent,dû,devait,devrait|
falloir|nötig sein|faut,fallait,faudra,faudrait|„il faut“ = man muss
mettre|legen / stellen|mets,met,mettons,mettez,mettent,mis,mettait|
parler|sprechen|parle,parles,parlons,parlez,parlent,parlé,parlait|
donner|geben|donne,donnes,donnons,donnez,donnent,donné|
trouver|finden|trouve,trouves,trouvons,trouvez,trouvent,trouvé|
croire|glauben|crois,croit,croyons,croyez,croient,cru|
penser|denken|pense,penses,pensons,pensez,pensent,pensé|
passer|vorbeigehen / verbringen|passe,passes,passons,passez,passent,passé,passée|
aimer|mögen / lieben|aime,aimes,aimons,aimez,aiment,aimé,aimait,aimerais,aimerait|
manger|essen|mange,manges,mangeons,mangez,mangent,mangé|
boire|trinken|bois,boit,buvons,buvez,boivent,bu|
partir|abfahren / weggehen|pars,part,partons,partez,partent,parti,partie|
arriver|ankommen|arrive,arrives,arrivons,arrivez,arrivent,arrivé,arrivée|
rester|bleiben|reste,restes,restons,restez,restent,resté,restée|
connaître|kennen|connais,connaît,connaissons,connaissez,connaissent,connu|
comprendre|verstehen|comprends,comprend,comprenons,comprenez,comprennent,compris|
chercher|suchen|cherche,cherches,cherchons,cherchez,cherchent,cherché|
regarder|anschauen|regarde,regardes,regardons,regardez,regardent,regardé|
écouter|zuhören|écoute,écoutes,écoutons,écoutez,écoutent,écouté|
répondre|antworten|réponds,répond,répondons,répondez,répondent,répondu|
habiter|wohnen|habite,habites,habitons,habitez,habitent,habité|
travailler|arbeiten|travaille,travailles,travaillons,travaillez,travaillent,travaillé|
dormir|schlafen|dors,dort,dormons,dormez,dorment,dormi|
sortir|ausgehen|sors,sort,sortons,sortez,sortent,sorti,sortie|
rentrer|heimkommen|rentre,rentres,rentrons,rentrez,rentrent,rentré,rentrée|
acheter|kaufen|achète,achètes,achetons,achetez,achètent,acheté|
oublier|vergessen|oublie,oublies,oublions,oubliez,oublient,oublié|
aider|helfen|aide,aides,aidons,aidez,aident,aidé|
laisser|lassen|laisse,laisses,laissons,laissez,laissent,laissé|
tomber|fallen|tombe,tombes,tombons,tombez,tombent,tombé,tombée|
ouvrir|öffnen|ouvre,ouvres,ouvrons,ouvrez,ouvrent,ouvert,ouverte|
fermer|schließen|ferme,fermes,fermons,fermez,ferment,fermé,fermée|
lire|lesen|lis,lit,lisons,lisez,lisent,lu|
écrire|schreiben|écris,écrit,écrivons,écrivez,écrivent|
vivre|leben|vis,vit,vivons,vivez,vivent,vécu|
sentir|fühlen / riechen|sens,sent,sentons,sentez,sentent,senti|
devenir|werden|deviens,devient,devenons,devenez,deviennent,devenu|
commencer|anfangen|commence,commences,commençons,commencez,commencent,commencé|
finir|beenden|finis,finit,finissons,finissez,finissent,fini|
porter|tragen|porte,portes,portons,portez,portent,porté|
montrer|zeigen|montre,montres,montrons,montrez,montrent,montré|
appeler|rufen / anrufen|appelle,appelles,appelons,appelez,appellent,appelé|„je m'appelle“ = ich heiße
jouer|spielen|joue,joues,jouons,jouez,jouent,joué|
marcher|gehen / funktionieren|marche,marches,marchons,marchez,marchent,marché|
## k Alltag
jour|Tag|jours|
an|Jahr|ans|
année|Jahr|années|
temps|Zeit / Wetter||
fois|Mal||
homme|Mann / Mensch|hommes|
femme|Frau|femmes|
enfant|Kind|enfants|
ami|Freund|amie,amis,amies|
gens|Leute||
maison|Haus|maisons|
ville|Stadt|villes|
rue|Straße|rues|
pays|Land||
monde|Welt / Leute||
eau|Wasser||
pain|Brot||
vin|Wein||
travail|Arbeit||
argent|Geld||
main|Hand|mains|
tête|Kopf||
yeux|Augen|œil|
cœur|Herz||
nuit|Nacht|nuits|
matin|Morgen|matins|
soir|Abend|soirs|
semaine|Woche|semaines|
mois|Monat||
heure|Stunde / Uhr|heures|
voiture|Auto|voitures|
chien|Hund|chiens|
chat|Katze|chats|
livre|Buch|livres|
mot|Wort|mots|
voisin|Nachbar|voisine,voisins|
marché|Markt|marchés|
## k Eigenschaften
bon|gut|bonne,bons,bonnes|
grand|groß|grande,grands,grandes|
petit|klein|petite,petits,petites|
nouveau|neu|nouvelle,nouveaux,nouvel|
vieux|alt|vieille,vieil|
beau|schön|belle,beaux,belles|
jeune|jung|jeunes|
premier|erste|première,premiers|
dernier|letzte|dernière|
seul|allein / einzig|seule|
vrai|wahr|vraie|
chaud|warm|chaude|
froid|kalt|froide|
heureux|glücklich|heureuse|
fatigué|müde|fatiguée|
facile|leicht||
cher|teuer / lieb|chère|
## k Wendungen
il y a|es gibt / vor (+ Zeit)||„il y a deux ans“ = vor zwei Jahren
c'est|das ist||
qu'est-ce que|was (Frage)||
est-ce que|(macht eine Frage)||
ça va|wie geht's? / geht schon||
il faut|man muss||
en fait|eigentlich||
du coup|deshalb / also||
d'accord|einverstanden / okay|accord|
s'il vous plaît|bitte||
merci|danke||
bonjour|guten Tag||
salut|hallo / tschüss||
au revoir|auf Wiedersehen||
## d Vom Deutschen her
restaurant|Restaurant|restaurants|
trottoir|Bürgersteig (Trottoir)|trottoirs|
étage|Etage|étages|
parfum|Parfüm||
garage|Garage||
niveau|Niveau||
balcon|Balkon||
bureau|Büro / Schreibtisch|bureaux|
adresse|Adresse||
abonnement|Abonnement||
bonbon|Bonbon|bonbons|
boulevard|Boulevard||
chauffeur|Fahrer (Chauffeur)||
kiosque|Kiosk||
oncle|Onkel||
tante|Tante||
toilettes|Toilette||
terrasse|Terrasse||
tasse|Tasse|tasses|
route|Straße / Weg (Route)||
routine|Routine||
charme|Charme||
café|Café / Kaffee|cafés|
hôtel|Hotel||
musique|Musik||
politique|Politik||
technique|Technik||
république|Republik||
problème|Problem|problèmes|
système|System||
thème|Thema||
programme|Programm||
minute|Minute|minutes|
moment|Moment||
million|Million|millions|
kilo|Kilo|kilos|
mètre|Meter|mètres|
banque|Bank||
famille|Familie|familles|
cousin|Cousin|cousine|
idée|Idee|idées|
groupe|Gruppe||
classe|Klasse||
liste|Liste||
film|Film|films|
photo|Foto|photos|
papier|Papier||
lampe|Lampe||
musée|Museum||
salade|Salat||
soupe|Suppe||
chocolat|Schokolade||
tomate|Tomate|tomates|
citron|Zitrone|citrons|
thé|Tee||
sucre|Zucker||
fenêtre|Fenster|fenêtres|
mer|Meer||
moderne|modern||
normal|normal|normale|
parfait|perfekt|parfaite|
nerveux|nervös|nerveuse|
sympathique|sympathisch|sympa|
typique|typisch||
pratique|praktisch||
logique|logisch||
fantastique|fantastisch||
romantique|romantisch||
discuter|diskutieren|discute,discutent,discuté|
réserver|reservieren|réserve,réservé|
organiser|organisieren|organise,organisé|
téléphoner|telefonieren|téléphone,téléphoné|
## e Vom Englischen her
difficile|schwierig (difficult)||
content|zufrieden (content)|contente|
histoire|Geschichte (history, story)|histoires|
cinéma|Kino (cinema)||
table|Tisch (table)|tables|
train|Zug (train)|trains|
simple|einfach (simple)||
calme|ruhig (calm)||
centre|Zentrum (centre)||
public|öffentlich (public)|publique|
visiter|besichtigen (visit)|visite,visité|
adorer|sehr mögen (adore)|adore,adorent,adoré|
décider|entscheiden (decide)|décide,décidé|
continuer|weitermachen (continue)|continue,continué|
expliquer|erklären (explain)|explique,expliqué|
changer|ändern (change)|change,changé|
entrer|hereinkommen (enter)|entre,entrent,entré,entrée|
préparer|vorbereiten (prepare)|prépare,préparé|
utiliser|benutzen (use)|utilise,utilisé|
imaginer|sich vorstellen (imagine)|imagine,imaginé|
excellent|ausgezeichnet (excellent)|excellente|
secret|Geheimnis (secret)|secrète|
voyage|Reise (voyage)|voyages|
lettre|Brief (letter)|lettres|
fruit|Obst (fruit)|fruits|
## b Deutsch und Englisch
nation|Nation||
information|Information|informations|
situation|Situation||
question|Frage (Question)|questions|
attention|Aufmerksamkeit / Achtung||
solution|Lösung||
université|Universität||
qualité|Qualität||
réalité|Realität||
énergie|Energie||
biologie|Biologie||
géographie|Geografie||
tourisme|Tourismus||
optimisme|Optimismus||
officiel|offiziell|officielle|
culturel|kulturell|culturelle|
traditionnel|traditionell|traditionnelle|
actif|aktiv|active|
positif|positiv|positive|
créatif|kreativ|créative|
culture|Kultur||
nature|Natur||
température|Temperatur||
conférence|Konferenz||
intelligence|Intelligenz||
distance|Distanz||
tolérance|Toleranz||
président|Präsident|présidente|
élégant|elegant|élégante|
intéressant|interessant|intéressante|
important|wichtig (important)|importante|
possible|möglich (possible)||
impossible|unmöglich (impossible)||
différent|anders (different)|différente,différents|
exactement|genau (exactly)||
rapidement|schnell (rapidly)||
curieux|neugierig (curious)|curieuse|
dangereux|gefährlich (dangerous)|dangereuse|
forêt|Wald (forest)|forêts|ê = verschwundenes s
hôpital|Krankenhaus (hospital, Hospital)||ô = verschwundenes s
fête|Fest|fêtes|ê = verschwundenes s
île|Insel (isle)|îles|î = verschwundenes s
école|Schule (school)|écoles|é- am Anfang = s-
étudiant|Student|étudiante,étudiants|é- am Anfang = s-
étrange|seltsam (strange)||é- am Anfang = s-
épice|Gewürz (spice)|épices|é- am Anfang = s-
accepter|akzeptieren (accept)|accepte,accepté|
sport|Sport||
police|Polizei (police)||
taxi|Taxi||
bus|Bus||
radio|Radio||
télévision|Fernsehen (Television)|télé|
docteur|Doktor / Arzt||
banane|Banane|bananes|
orange|Orange|oranges|
chef|Chef||
menu|Menü||
long|lang (long)|longue,longs|
## k Zahlen
deux|zwei||
trois|drei||
quatre|vier||
cinq|fünf||
six|sechs||
sept|sieben||„sept“: das p ist stumm
huit|acht||
neuf|neun / neu||„neuf“ heißt auch „neu“
dix|zehn||
onze|elf||
douze|zwölf||
quinze|fünfzehn||
vingt|zwanzig||
trente|dreißig||
cinquante|fünfzig||
soixante|sechzig||
cent|hundert|cents|„pour cent“ = Prozent
mille|tausend||
## k Tage & Zeit
lundi|Montag||
mardi|Dienstag||
mercredi|Mittwoch||
jeudi|Donnerstag||
vendredi|Freitag||
samedi|Samstag||
dimanche|Sonntag||
midi|Mittag||
minuit|Mitternacht||
lendemain|nächster Tag||
début|Anfang||
fin|Ende||
après-midi|Nachmittag||
retard|Verspätung||„en retard“ = zu spät
## k Menschen
père|Vater||
mère|Mutter||
frère|Bruder|frères|
sœur|Schwester|sœurs|
fils|Sohn||
fille|Tochter / Mädchen|filles|
garçon|Junge / Kellner|garçons|
mari|Ehemann||
copain|Freund (Kumpel)|copine,copains,copines|
monsieur|Herr|messieurs|
parents|Eltern||auch: Verwandte
personne|niemand / Person|personnes|„ne … personne“ = niemand
## k Essen & Trinken
fromage|Käse||
lait|Milch||
viande|Fleisch||
poisson|Fisch||
poulet|Hähnchen||
légume|Gemüse|légumes|
œuf|Ei|œufs|
pomme|Apfel|pommes|„pomme de terre“ = Kartoffel
gâteau|Kuchen|gâteaux|
boisson|Getränk|boissons|
repas|Mahlzeit||
déjeuner|Mittagessen||„petit déjeuner“ = Frühstück
faim|Hunger||„j'ai faim“ = ich habe Hunger
soif|Durst||
## k Haus & Stadt
porte|Tür|portes|auch: „trägt“ (von porter)
chambre|Zimmer|chambres|
cuisine|Küche / Kochen||
lit|Bett||auch: „liest“ (von lire)
clé|Schlüssel|clés|
gare|Bahnhof||
plage|Strand||
magasin|Laden|magasins|nicht „Magazin“!
boulangerie|Bäckerei||
église|Kirche||
place|Platz||
pont|Brücke||
sortie|Ausgang||
bâtiment|Gebäude||
## k Dinge
sac|Tasche||
valise|Koffer||
vélo|Fahrrad|vélos|
avion|Flugzeug||
bateau|Schiff|bateaux|
billet|Fahrkarte / Geldschein|billets|
lunettes|Brille||
vêtements|Kleidung|vêtement|
chaussure|Schuh|chaussures|
cadeau|Geschenk|cadeaux|
## k Natur & Wetter
soleil|Sonne||
pluie|Regen||
vent|Wind||
ciel|Himmel||
arbre|Baum|arbres|
fleur|Blume|fleurs|
neige|Schnee||
pleuvoir|regnen|pleut,pleuvait,pleuvra|„il pleut“ = es regnet
## k Körper
bras|Arm||
jambe|Bein|jambes|
pied|Fuß|pieds|
dos|Rücken||
ventre|Bauch||
peur|Angst||„avoir peur“ = Angst haben
## k Mehr Verben
entendre|hören|entends,entend,entendons,entendez,entendent,entendu|
perdre|verlieren|perds,perd,perdons,perdez,perdent,perdu,perdue|
vendre|verkaufen|vends,vend,vendons,vendez,vendent,vendu|
rendre|zurückgeben|rends,rend,rendons,rendez,rendent,rendu|
payer|bezahlen|paie,paies,payons,payez,paient,payé|
essayer|versuchen / anprobieren|essaie,essaies,essayons,essayez,essaient,essayé|
envoyer|schicken|envoie,envoies,envoyons,envoyez,envoient,envoyé|
revenir|zurückkommen|reviens,revient,revenons,revenez,reviennent,revenu,revenue|
tenir|halten|tiens,tient,tenons,tenez,tiennent,tenu|„tiens !“ = schau mal!
recevoir|bekommen|reçois,reçoit,recevons,recevez,reçoivent,reçu|
apprendre|lernen|apprends,apprend,apprenons,apprenez,apprennent,appris|
apporter|mitbringen|apporte,apportes,apportons,apportez,apportent,apporté|
raconter|erzählen|raconte,racontes,racontons,racontez,racontent,raconté|
rire|lachen|ris,rit,rions,riez,rient,ri|
sourire|lächeln|souris,sourit,souriant|
nager|schwimmen|nage,nages,nageons,nagez,nagent,nagé|
courir|rennen|cours,court,courons,courez,courent,couru|
conduire|fahren (Auto)|conduis,conduit,conduisons,conduisez,conduisent|
monter|hinaufgehen / einsteigen|monte,montes,montons,montez,montent,monté,montée|
descendre|hinuntergehen / aussteigen|descends,descend,descendons,descendez,descendent,descendu,descendue|
tourner|abbiegen / drehen|tourne,tournes,tournons,tournez,tournent,tourné|
laver|waschen|lave,laves,lavons,lavez,lavent,lavé|
cuisiner|kochen|cuisines,cuisinons,cuisinez,cuisinent,cuisiné|
gagner|gewinnen / verdienen|gagne,gagnes,gagnons,gagnez,gagnent,gagné|
choisir|wählen|choisis,choisit,choisissons,choisissez,choisissent,choisi|
sembler|scheinen|semble,semblent,semblait|
arrêter|aufhören / anhalten|arrête,arrêtes,arrêtons,arrêtez,arrêtent,arrêté|
rencontrer|treffen|rencontre,rencontres,rencontrons,rencontrez,rencontrent,rencontré,rencontrés|
quitter|verlassen|quitte,quittes,quittons,quittez,quittent,quitté|
pleurer|weinen|pleure,pleures,pleurons,pleurez,pleurent,pleuré|
garder|behalten / hüten|garde,gardes,gardons,gardez,gardent,gardé|
fumer|rauchen|fume,fumes,fumons,fumez,fument,fumé|
## k Mehr Eigenschaften
gentil|nett|gentille,gentils,gentilles|
triste|traurig|tristes|
malade|krank|malades|
prêt|fertig / bereit|prête,prêts,prêtes|
propre|sauber / eigen|propres|
sale|schmutzig|sales|
plein|voll|pleine,pleins,pleines|
vide|leer|vides|
fort|stark / laut|forte,forts,fortes|
lourd|schwer|lourde|
léger|leicht|légère|
joli|hübsch|jolie,jolis,jolies|
gros|dick / groß|grosse|
haut|hoch|haute|
bas|niedrig / unten|basse|„en bas“ = unten
noir|schwarz|noire,noirs|
blanc|weiß|blanche,blancs|
rouge|rot|rouges|
vert|grün|verte|
bleu|blau|bleue,bleus|
jaune|gelb|jaunes|
ancien|ehemalig / alt|ancienne,anciens|
prochain|nächste|prochaine|
meilleur|besser / beste|meilleure|
mauvais|schlecht|mauvaise|
drôle|lustig||
grave|schlimm / ernst||„c'est pas grave“ = macht nichts
sûr|sicher|sûre|„bien sûr“ = natürlich
désolé|tut mir leid|désolée|
## k Mehr kleine Wörter
presque|fast||
partout|überall||
ailleurs|woanders||
dehors|draußen||
ensuite|danach||
surtout|vor allem||
environ|ungefähr||
plutôt|eher||
sinon|sonst||
autour|rund um||
aucun|kein einziger|aucune|
celui|derjenige / der da|celle,ceux,celles|
dont|von dem / dessen||
lorsque|als / wenn||
## k Mehr Wendungen
tout de suite|sofort||
quand même|trotzdem||
bien sûr|natürlich||
d'abord|zuerst|abord|
à côté|daneben / nebenan||
côté|Seite||„à côté“ = daneben
en face|gegenüber||
pas mal|nicht schlecht / ziemlich viel||
à cause de|wegen||
de rien|gern geschehen||
à bientôt|bis bald||
à demain|bis morgen||
bonne nuit|gute Nacht||
bonsoir|guten Abend||
excusez-moi|entschuldigen Sie||
petit déjeuner|Frühstück||
pomme de terre|Kartoffel||
## b Monate
janvier|Januar||
février|Februar||
mars|März||
avril|April||
mai|Mai||
juin|Juni||
juillet|Juli||
août|August||gesprochen „ut“
septembre|September||
octobre|Oktober||
novembre|November||
décembre|Dezember||
## d Mehr vom Deutschen
appartement|Wohnung (Appartement)|appartements|
quartier|Viertel (Quartier)|quartiers|
journal|Zeitung (Journal)|journaux|
souvenir|Erinnerung / Souvenir|souvenirs|
rendez-vous|Verabredung (Rendezvous)||
boutique|Laden (Boutique)|boutiques|
ingénieur|Ingenieur|ingénieurs|
baguette|Baguette|baguettes|
champagne|Champagner||
métro|U-Bahn (Metro)||
pull|Pulli|pulls|
sauce|Soße||
crème|Sahne / Creme||
croissant|Croissant|croissants|
dessert|Dessert / Nachtisch|desserts|
bébé|Baby|bébés|
## e Mehr vom Englischen
couleur|Farbe (colour)|couleurs|
prix|Preis (price)||
danger|Gefahr (danger)||
coûter|kosten (cost)|coûte,coûtent,coûtait|
préférer|lieber mögen (prefer)|préfère,préfères,préférez,préféré|
vacances|Ferien (vacation)||
jardin|Garten (garden)|jardins|
voix|Stimme (voice)||
image|Bild (image)|images|
liberté|Freiheit (liberty)||
dîner|Abendessen (dinner)||
magnifique|großartig (magnificent)||
délicieux|lecker (delicious)|délicieuse|
incroyable|unglaublich (incredible)||
agréable|angenehm (agreeable)||
évidemment|offensichtlich (evidently)||
finalement|schließlich (finally)||
probablement|wahrscheinlich (probably)||
## b Mehr von beiden
village|Dorf (village)|villages|
page|Seite (Page)|pages|
plan|Plan / Stadtplan|plans|
courage|Mut (Courage)||
rare|selten (rar)||
riche|reich (rich)|riches|
rapide|schnell (rapid)|rapides|
énorme|riesig (enorm)|énormes|
terrible|schrecklich (terrible)||
horrible|furchtbar (horribel)||
confortable|bequem (komfortabel)||
normalement|normalerweise||
absolument|absolut||
simplement|einfach (simply)||
accident|Unfall (accident)|accidents|
aéroport|Flughafen (Airport)||
concert|Konzert|concerts|
téléphone|Telefon|téléphones|
pharmacie|Apotheke (Pharmazie)||
`;
