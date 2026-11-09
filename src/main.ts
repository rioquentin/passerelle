import './styles.css';
import { h, app, plaque, screen, closePop } from './lib/ui.ts';
import { stop, voiceCount, hasSpeech } from './lib/speech.ts';
import { CORE, CHUNKS, ENTRIES } from './lib/lexicon.ts';
import { knownCount, daysThisMonth, lastPlayed, resetAll, storyState } from './lib/store.ts';
import { kern, freund, maschine, klang, signale } from './games/quiz.ts';
import { detektiv, geschichten, geschichte, textometer } from './games/texts.ts';
import { enthuellen, jagd } from './games/extra.ts';
import { STORIES } from './data/stories.ts';

const GAMES = [
  { href: '#/detektiv', t: 'Wörter-Detektiv', d: 'Ein echter französischer Text. Markiere, was du schon verstehst – es ist mehr, als du denkst.', feature: true },
  { href: '#/geschichten', t: 'Geschichten', d: 'Lena in Toulouse: kurze Folgen zum Lesen und Hören, jedes Wort antippbar.', feature: true },
  { href: '#/kern', t: 'Kernwörter', d: 'Die kleinen Wörter, die man nicht erraten kann: je, pas, déjà, il y a …' },
  { href: '#/freund', t: 'Freund oder Verräter?', d: 'Hier = gestern. Friseur gibt es nicht. Wer lügt?' },
  { href: '#/maschine', t: 'Wortmaschine', d: 'Universität → université. Vierzehn Regeln, tausende Wörter.' },
  { href: '#/enthuellen', t: 'Wort für Wort', d: 'Ein verdeckter Satz. Errate den Sinn mit möglichst wenigen Wörtern.' },
  { href: '#/klang', t: 'Klangpaare', d: 'tu oder tout? vent, vont oder vin? Fürs Ohr.' },
  { href: '#/jagd', t: 'Hörjagd', d: 'Tippe jedes Mal, wenn „pas“, „on“ oder „rien“ fällt. Nur fürs Ohr.' },
  { href: '#/signale', t: 'Signale', d: 'Vorbei oder später? Ja oder nein? Wer tut was? Zwölf kleine Signale.' },
  { href: '#/textometer', t: 'Textometer', d: 'Irgendeinen Text einfügen und sehen, wie viel du davon verstehst.' },
];

function home() {
  const pool = [...CORE, ...CHUNKS, ...ENTRIES.filter((e) => e.kind === 'f')].map((e) => e.id);
  const known = knownCount(pool);
  const days = daysThisMonth();
  const last = lastPlayed();
  const read = STORIES.filter((s) => storyState(s.id)?.read).length;
  const gap = last ? Math.round((Date.now() - new Date(last + 'T12:00').getTime()) / 86_400_000) : -1;
  const welcome = !last
    ? 'Du verstehst schon viel mehr Französisch, als du glaubst. Hier lernst du nur zu verstehen – nichts schreiben, nichts sprechen. Fang mit dem Detektiv an.'
    : gap > 3
      ? 'Schön, dass du wieder da bist. Pausen sind kein Problem – was du kannst, bleibt.'
      : 'Bonjour ! Such dir aus, worauf du Lust hast.';

  app().replaceChildren(
    h('div', { class: 'home-head' },
      plaque('Passerelle', 'Pont vers le français', 'Brücke ins Französische'),
      h('p', { class: 'welcome' }, welcome),
      last ? h('div', { class: 'stats' },
        h('div', { class: 'stat' }, h('b', {}, String(known)), h('span', {}, 'Kernwörter sicher erkannt')),
        h('div', { class: 'stat' }, h('b', {}, `${read}/${STORIES.length}`), h('span', {}, 'Geschichten gelesen')),
        h('div', { class: 'stat' }, h('b', {}, String(days)), h('span', {}, days === 1 ? 'Tag diesen Monat' : 'Tage diesen Monat'))) : null),
    h('div', { class: 'section-label' }, 'Was machen wir?'),
    h('ul', { class: 'games' }, ...GAMES.map((g, i) => h('li', {},
      h('a', { href: g.href, class: g.feature ? 'feature' : '' },
        h('span', { class: 'n' }, String(i + 1)),
        h('span', { class: 't' }, g.t),
        h('span', { class: 'm' }, '→'),
        h('span', { class: 'd' }, g.d))))),
    h('div', { class: 'foot' },
      h('a', { href: '#/info' }, 'Wie das funktioniert'),
      hasSpeech() && voiceCount() === 0 ? h('span', {}, 'Keine französische Stimme gefunden – siehe „Wie das funktioniert“.') : null),
  );
}

function info() {
  const voices = voiceCount();
  screen('Wie das funktioniert',
    h('div', { class: 'prose' },
      h('p', {}, 'Passerelle trainiert nur das Verstehen. Du musst nie etwas schreiben oder sagen. Dafür nutzt es, was du schon kannst: Deutsch und Englisch.'),
      h('h2', { lang: 'fr' }, 'Les quatre leviers'),
      h('p', {}, '1. Tausende Wörter sind durchsichtig (université, réserver, forêt). 2. Ein paar hundert kleine Wörter muss man lernen (je, pas, déjà) – die übt „Kernwörter“. 3. Das Ohr: gesprochenes Französisch verschluckt Laute, deshalb hörst du alles mit wechselnden Stimmen. 4. Viel leichter Text: die Geschichten.'),
      h('h2', { lang: 'fr' }, 'Pas de pression'),
      h('p', {}, 'Keine Serie, die abreißt, keine Leben, keine Erinnerungen. Wörter, die du falsch hattest, kommen von selbst wieder – im Hintergrund, nach einem Wiederholungsplan. Dein Fortschritt bleibt nur in diesem Browser gespeichert.'),
      h('h2', { lang: 'fr' }, 'Les voix'),
      h('p', {}, voices
        ? `Dein Gerät hat ${voices} französische Stimme${voices > 1 ? 'n' : ''}. Die Spiele wechseln zwischen ihnen.`
        : 'Dein Gerät hat noch keine französische Stimme. Auf dem iPhone: Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Französisch. Auf Android: Einstellungen → Sprachausgabe → Sprachdaten installieren.'),
      voices === 1 ? h('p', {}, 'Tipp: Mit mehr Stimmen lernt das Ohr besser. Weitere französische Stimmen kannst du in den Systemeinstellungen laden (auch kanadisch, belgisch, schweizerisch).') : null,
      h('h2', { lang: 'fr' }, 'Sources'),
      h('p', {}, 'Häufigkeiten nach Lexique 3.83 (New & Pallier, lexique.org). Methode inspiriert von EuroComRom (Klein & Stegmann) und der Forschung zu Wortschatzabdeckung (Nation, Laufer, Schmitt), Hörtraining mit vielen Stimmen (HVPT) und „Processing Instruction“ (VanPatten).'),
      h('h2', {}, 'Neu anfangen'),
      h('button', { class: 'btn ghost', onclick: () => { if (confirm('Wirklich den ganzen Fortschritt löschen?')) { resetAll(); location.hash = '#/'; } } }, 'Fortschritt löschen'),
    ));
}

const routes: Record<string, (arg?: string) => void> = {
  '': home, kern, freund, maschine, klang, enthuellen, jagd, detektiv, geschichten, textometer, info,
  geschichte: (id) => geschichte(id ?? ''),
  signale: (a) => signale(a),
};

function route() {
  stop();
  closePop();
  const [, name = '', arg] = location.hash.replace(/^#/, '').split('/');
  (routes[name] ?? home)(arg);
}

window.addEventListener('hashchange', route);
route();
// Stimmen laden asynchron: Startseite neu zeichnen, falls die Warnung nicht mehr stimmt
if (hasSpeech()) speechSynthesis.addEventListener('voiceschanged', () => { if (!location.hash || location.hash === '#/') home(); });
