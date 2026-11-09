// Règles de transformation DE/EN → FR (tamis EuroCom 3, 4 et 7)
export interface Rule {
  id: string;
  de: string; // suffixe allemand
  en: string; // suffixe anglais
  fr: string; // suffixe français
  ex: [string, string, string][]; // [allemand, anglais, français]
}

export const RULES: Rule[] = [
  { id: 'tion', de: '-tion', en: '-tion', fr: '-tion', ex: [
    ['Nation', 'nation', 'nation'], ['Information', 'information', 'information'], ['Situation', 'situation', 'situation'],
    ['Station', 'station', 'station'], ['Tradition', 'tradition', 'tradition'], ['Revolution', 'revolution', 'révolution'],
    ['Position', 'position', 'position'], ['Konstruktion', 'construction', 'construction'] ] },
  { id: 'ite', de: '-ität', en: '-ity', fr: '-ité', ex: [
    ['Universität', 'university', 'université'], ['Qualität', 'quality', 'qualité'], ['Realität', 'reality', 'réalité'],
    ['Identität', 'identity', 'identité'], ['Kreativität', 'creativity', 'créativité'], ['Elektrizität', 'electricity', 'électricité'],
    ['Mentalität', 'mentality', 'mentalité'], ['Spezialität', 'speciality', 'spécialité'] ] },
  { id: 'er', de: '-ieren', en: '-ate / -ize', fr: '-er', ex: [
    ['reservieren', 'reserve', 'réserver'], ['akzeptieren', 'accept', 'accepter'], ['organisieren', 'organize', 'organiser'],
    ['telefonieren', 'phone', 'téléphoner'], ['diskutieren', 'discuss', 'discuter'], ['informieren', 'inform', 'informer'],
    ['kontrollieren', 'control', 'contrôler'], ['studieren', 'study', 'étudier'] ] },
  { id: 'ie', de: '-ie', en: '-y', fr: '-ie', ex: [
    ['Biologie', 'biology', 'biologie'], ['Energie', 'energy', 'énergie'], ['Geografie', 'geography', 'géographie'],
    ['Fotografie', 'photography', 'photographie'], ['Philosophie', 'philosophy', 'philosophie'], ['Ironie', 'irony', 'ironie'],
    ['Strategie', 'strategy', 'stratégie'], ['Fantasie', 'fantasy', 'fantaisie'] ] },
  { id: 'isme', de: '-ismus', en: '-ism', fr: '-isme', ex: [
    ['Tourismus', 'tourism', 'tourisme'], ['Optimismus', 'optimism', 'optimisme'], ['Realismus', 'realism', 'réalisme'],
    ['Pessimismus', 'pessimism', 'pessimisme'], ['Journalismus', 'journalism', 'journalisme'], ['Egoismus', 'egoism', 'égoïsme'] ] },
  { id: 'el', de: '-ell', en: '-al', fr: '-el / -elle', ex: [
    ['offiziell', 'official', 'officiel'], ['kulturell', 'cultural', 'culturel'], ['traditionell', 'traditional', 'traditionnel'],
    ['natürlich (natural)', 'natural', 'naturel'], ['professionell', 'professional', 'professionnel'], ['individuell', 'individual', 'individuel'],
    ['sensationell', 'sensational', 'sensationnel'] ] },
  { id: 'ique', de: '-ik / -isch', en: '-ic', fr: '-ique', ex: [
    ['Musik', 'music', 'musique'], ['Politik', 'politics', 'politique'], ['Technik', 'technique', 'technique'],
    ['Republik', 'republic', 'république'], ['typisch', 'typical', 'typique'], ['praktisch', 'practical', 'pratique'],
    ['fantastisch', 'fantastic', 'fantastique'], ['elektrisch', 'electric', 'électrique'] ] },
  { id: 'if', de: '-iv', en: '-ive', fr: '-if / -ive', ex: [
    ['aktiv', 'active', 'actif'], ['positiv', 'positive', 'positif'], ['kreativ', 'creative', 'créatif'],
    ['negativ', 'negative', 'négatif'], ['naiv', 'naive', 'naïf'], ['sportiv (sportlich)', 'sporty', 'sportif'],
    ['massiv', 'massive', 'massif'] ] },
  { id: 'ure', de: '-ur', en: '-ure', fr: '-ure', ex: [
    ['Kultur', 'culture', 'culture'], ['Natur', 'nature', 'nature'], ['Temperatur', 'temperature', 'température'],
    ['Literatur', 'literature', 'littérature'], ['Architektur', 'architecture', 'architecture'], ['Figur', 'figure', 'figure (Achtung: Gesicht!)'] ] },
  { id: 'ence', de: '-enz / -anz', en: '-ence / -ance', fr: '-ence / -ance', ex: [
    ['Konferenz', 'conference', 'conférence'], ['Intelligenz', 'intelligence', 'intelligence'], ['Distanz', 'distance', 'distance'],
    ['Toleranz', 'tolerance', 'tolérance'], ['Konkurrenz', 'competition', 'concurrence'], ['Eleganz', 'elegance', 'élégance'],
    ['Existenz', 'existence', 'existence'] ] },
  { id: 'ment', de: '—', en: '-ly', fr: '-ment', ex: [
    ['genau', 'exactly', 'exactement'], ['schnell', 'rapidly', 'rapidement'], ['absolut', 'absolutely', 'absolument'],
    ['normalerweise', 'normally', 'normalement'], ['einfach', 'simply', 'simplement'], ['vollständig', 'completely', 'complètement'] ] },
  { id: 'eux', de: '—', en: '-ous', fr: '-eux / -euse', ex: [
    ['neugierig', 'curious', 'curieux'], ['gefährlich', 'dangerous', 'dangereux'], ['nervös', 'nervous', 'nerveux'],
    ['berühmt', 'famous', 'fameux'], ['großzügig', 'generous', 'généreux'], ['ernst', 'serious', 'sérieux'] ] },
  { id: 'circ', de: '-s- (Fest)', en: '-s- (forest)', fr: 'ˆ (Zirkumflex)', ex: [
    ['Forst (Wald)', 'forest', 'forêt'], ['Hospital', 'hospital', 'hôpital'], ['Fest', 'feast', 'fête'],
    ['Insel (isle)', 'isle', 'île'], ['Küste', 'coast', 'côte'], ['Gast (host)', 'host', 'hôte'], ['Bestie', 'beast', 'bête'] ] },
  { id: 'e-', de: 'S- / St-', en: 's- / st-', fr: 'é-', ex: [
    ['Schule', 'school', 'école'], ['Student', 'student', 'étudiant'], ['Staat', 'state', 'état'],
    ['seltsam (strange)', 'strange', 'étrange'], ['Gewürz (spice)', 'spice', 'épice'], ['Schwamm (sponge)', 'sponge', 'éponge'] ] },
];
