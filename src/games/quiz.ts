import { h, runRounds, plaque, choices, entryBox, speakBtn, screen, frTypo } from '../lib/ui.ts';
import { say } from '../lib/speech.ts';
import { CORE, CHUNKS, type Entry } from '../lib/lexicon.ts';
import { answer, pick, shuffle, markPlayed } from '../lib/store.ts';
import { FALSE_FRIENDS, type FF } from '../data/falsefriends.ts';
import { RULES, type Rule } from '../data/rules.ts';
import { PAIRS } from '../data/pairs.ts';
import { SIGNALS, SETS, ZEIT_OPTIONS, NEG_OPTIONS, type SignalItem } from '../data/signals.ts';

const KERN_POOL: Entry[] = [...CORE, ...CHUNKS].sort((a, b) => a.rank - b.rank);

function distractors(e: Entry, pool: Entry[], n: number): Entry[] {
  const same = shuffle(pool.filter((x) => x !== e && x.cat === e.cat && x.de !== e.de));
  const other = shuffle(pool.filter((x) => x !== e && x.cat !== e.cat && x.de !== e.de));
  return [...same.slice(0, n - 1), ...other].slice(0, n);
}

// ---------- 1. Kernwörter ----------
export function kern() {
  const items = pick(KERN_POOL, 10, 4);
  runRounds({
    title: 'Kernwörter',
    items,
    again: kern,
    intro: () => h('div', {},
      h('p', { class: 'prompt' }, 'Die kleinen Wörter, die man nicht erraten kann – aber ständig hört.',
        h('small', {}, 'Manche Runden sind nur zum Hören. Ton an!'))),
    render(e, stage, done) {
      const earOnly = Math.random() < 0.35;
      const pl = plaque(earOnly ? '?' : e.fr, earOnly ? 'Hör genau hin' : 'Was heißt …');
      stage.append(pl, speakBtn(e.fr, earOnly ? 'Nochmal hören' : 'Anhören'));
      say(e.fr);
      const opts = shuffle([e, ...distractors(e, KERN_POOL, 3)]);
      choices(stage, opts.map((o) => ({ label: o.de })), opts.indexOf(e), (ok) => {
        answer(e.id, ok);
        if (earOnly) pl.querySelector('.big')!.textContent = e.fr;
        stage.append(entryBox(ok, e.fr, e.de, e.hint));
        done(ok, `${e.fr} = ${e.de}`);
      });
    },
  });
}

// ---------- 2. Freund oder Verräter ----------
export function freund() {
  const pool = shuffle(FALSE_FRIENDS.map((f) => ({ ...f, id: f.fr })));
  const items = pick(pool, 10, 5);
  runRounds({
    title: 'Freund oder Verräter?',
    items,
    again: freund,
    intro: () => h('p', { class: 'prompt' }, 'Viele französische Wörter kennst du schon. Aber manche lügen.',
      h('small', {}, 'Tippe oder wische: links = echter Freund, rechts = Verräter.')),
    render(f: FF & { id: string }, stage, done) {
      const card = plaque(f.fake ? `« ${f.fr} »` : f.fr, f.fake ? 'Gibt es das auf Französisch?' : 'Heißt das dasselbe?');
      const zone = h('div', { class: 'card-zone' }, card);
      const looks = h('p', { class: 'looks' }, 'Sieht aus wie ', f.lang === 'de' ? 'deutsch ' : 'englisch ', h('b', {}, `„${f.looks}“`));
      stage.append(zone, looks);
      if (!f.fake) say(f.fr);
      let answered = false;
      const decide = (saysFriend: boolean) => {
        if (answered) return;
        answered = true;
        const ok = saysFriend === f.friend;
        if (!f.fake) answer(f.id, ok);
        card.style.transform = `translateX(${saysFriend ? -24 : 24}px) rotate(${saysFriend ? -3 : 3}deg)`;
        btns.forEach((b, j) => { b.disabled = true; if ((j === 0) === f.friend) b.classList.add('ok'); else if ((j === 0) === saysFriend) b.classList.add('no'); });
        stage.append(entryBox(ok, f.fake ? f.fr : f.fr, f.fake ? `auf Französisch: ${f.de}` : f.de, f.note));
        done(ok, `${f.fr}: ${f.de}`);
      };
      const btns = [
        h('button', { class: 'opt', onclick: () => decide(true) }, '← Echter Freund'),
        h('button', { class: 'opt', onclick: () => decide(false), style: 'text-align:right' }, 'Verräter →'),
      ];
      stage.append(h('div', { class: 'options two' }, ...btns));
      swipe(zone, card, decide);
    },
  });
}

function swipe(zone: HTMLElement, card: HTMLElement, decide: (left: boolean) => void) {
  let x0 = 0, dx = 0, active = false;
  zone.addEventListener('pointerdown', (e) => { active = true; x0 = e.clientX; dx = 0; card.style.transition = 'none'; });
  zone.addEventListener('pointermove', (e) => {
    if (!active) return;
    dx = e.clientX - x0;
    card.style.transform = `translateX(${dx}px) rotate(${dx / 20}deg)`;
  });
  const end = () => {
    if (!active) return;
    active = false;
    card.style.transition = '';
    if (Math.abs(dx) > 80) decide(dx < 0);
    else card.style.transform = '';
  };
  zone.addEventListener('pointerup', end);
  zone.addEventListener('pointercancel', end);
}

// ---------- 3. Wortmaschine ----------
interface MItem { id: string; rule: Rule; ex: [string, string, string] }

function suffixes(r: Rule): string[] {
  return r.fr.split('/').map((s) => s.trim().replace(/^-/, '')).filter((s) => /^[a-zé]+$/.test(s));
}

function fakeFr(item: MItem): string[] | null {
  const fr = item.ex[2];
  if (fr.includes('(')) return null;
  const own = suffixes(item.rule).find((s) => fr.endsWith(s));
  if (!own) return null;
  const stem = fr.slice(0, -own.length);
  const others = shuffle(RULES.filter((r) => r !== item.rule).flatMap(suffixes)).filter((s) => s !== own);
  const fakes = [...new Set(others.map((s) => stem + s))].filter((w) => w !== fr).slice(0, 2);
  return fakes.length === 2 ? fakes : null;
}

export function maschine() {
  const all: MItem[] = RULES.flatMap((rule) => rule.ex.map((ex) => ({ id: 'regel:' + ex[2], rule, ex })));
  const items = pick(shuffle(all), 10, 6);
  runRounds({
    title: 'Wortmaschine',
    items,
    again: maschine,
    intro: () => h('div', {},
      h('p', { class: 'prompt' }, 'Du kennst schon Tausende französische Wörter – du musst sie nur umbauen.',
        h('small', {}, 'Aus „Universität“ wird „université“, aus „reservieren“ wird „réserver“. Die Maschine zeigt dir, wie.'))),
    render(it, stage, done) {
      const [de, en, fr] = it.ex;
      const clean = fr.replace(/\s*\(.*\)$/, '');
      const fakes = fakeFr(it);
      const ruleLine = h('p', { class: 'note' }, `Regel: deutsch ${it.rule.de} · englisch ${it.rule.en} → französisch ${it.rule.fr}`);
      const explain = (ok: boolean) => {
        const others = it.rule.ex.filter((e) => e !== it.ex).slice(0, 3).map((e) => `${e[0]} → ${e[2]}`).join(', ');
        stage.append(entryBox(ok, clean, de, `Genauso: ${others}.`));
        say(clean);
      };
      if (fakes) {
        // Richtung A: deutsches Wort hinein, französisches heraus
        stage.append(plaque(de, 'Hinein in die Maschine', `englisch: ${en}`), h('p', { class: 'prompt' }, 'Was kommt auf Französisch heraus?'));
        const opts = shuffle([clean, ...fakes]);
        choices(stage, opts.map((o) => ({ label: o, fr: true })), opts.indexOf(clean), (ok) => {
          answer(it.id, ok); stage.append(ruleLine); explain(ok); done(ok, `${de} → ${clean}`);
        });
      } else {
        // Richtung B: französisches Wort, Bedeutung erraten
        stage.append(plaque(clean, 'Unbekanntes Wort'), speakBtn(clean), h('p', { class: 'prompt' }, 'Was heißt das wohl?'));
        const wrong = shuffle(all.filter((x) => x.rule !== it.rule)).slice(0, 2).map((x) => x.ex[0]);
        const opts = shuffle([de, ...wrong]);
        choices(stage, opts.map((o) => ({ label: o })), opts.indexOf(de), (ok) => {
          answer(it.id, ok); stage.append(ruleLine); explain(ok); done(ok, `${clean} = ${de}`);
        });
      }
    },
  });
}

// ---------- 4. Klangpaare ----------
export function klang() {
  const rounds = shuffle(PAIRS).slice(0, 12).map((p) => ({ p, target: Math.floor(Math.random() * p.words.length) }));
  runRounds({
    title: 'Klangpaare',
    items: rounds,
    again: klang,
    intro: () => h('div', {},
      h('p', { class: 'prompt' }, 'Dein Ohr lernt die Laute, die es im Deutschen nicht gibt – oder die anders geschrieben werden.',
        h('small', {}, 'Jedes Wort kommt mit wechselnden Stimmen. Kopfhörer helfen.'))),
    render({ p, target }, stage, done) {
      const w = p.words[target];
      markPlayed();
      stage.append(plaque('?', p.contrast, 'Welches Wort hörst du?'));
      stage.append(h('div', { class: 'row' },
        h('button', { class: 'btn speak', onclick: () => say(w.fr, { same: true }) }, '▶ Nochmal'),
        h('button', { class: 'btn ghost', onclick: () => say(w.fr) }, 'Andere Stimme')));
      say(w.fr);
      choices(stage, p.words.map((x) => ({ label: x.fr, hint: x.de, fr: true })), target, (ok) => {
        stage.append(entryBox(ok, w.fr, w.de, p.tip));
        done(ok, `${p.contrast}: ${w.fr}`);
      }, p.words.length === 2 ? 'two' : '');
    },
  });
}

// ---------- 5. Signale (12 Serien) ----------
type SItem = SignalItem & { id: string };

function signalRounds(n: number | null): SItem[] {
  const all: SItem[] = SIGNALS.map((s) => ({ ...s, id: 'signal:' + s.fr }));
  if (n === null) return shuffle(all.filter((s) => s.sig > 0)).slice(0, 12);
  const own = shuffle(all.filter((s) => s.sig === n)).slice(0, 8);
  const kind = own[0]?.kind;
  if (kind === 'frei') return own;
  // Zeit / Verneinung: mit Kontrastsätzen auffüllen (Gegenwart zuerst)
  const others = shuffle(all.filter((s) => s.kind === kind && s.sig !== n)).sort((a, b) => (a.sig === 0 ? 0 : 1) - (b.sig === 0 ? 0 : 1));
  return shuffle([...own, ...others.slice(0, Math.max(3, 10 - own.length))]);
}

export function signale(arg?: string) {
  const n = arg === 'mix' ? null : arg ? Number(arg) : NaN;
  if (Number.isNaN(n)) return signalMenu();
  const set = n === null ? undefined : SETS.find((s) => s.n === n);
  if (n !== null && !set) return signalMenu();
  runRounds({
    title: set ? set.title : 'Signale gemischt',
    items: signalRounds(n),
    again: () => signale(arg),
    intro: () => h('p', { class: 'prompt' }, set ? set.sub : 'Alle zwölf Signale durcheinander.',
      h('small', {}, 'Keine Regeln auswendig lernen: Achte nur auf das Signal und entscheide, was gemeint ist.')),
    render(s: SItem, stage, done) {
      const st = SETS.find((x) => x.n === s.sig);
      let opts: { label: string; hint?: string }[];
      let idx: number;
      let ask: string;
      if (s.kind === 'frei') {
        const labels = s.opts ? shuffle(s.opts)
          : st?.opts ? st.opts
          : shuffle([s.answer, ...shuffle((st?.pool ?? []).filter((o) => o !== s.answer)).slice(0, 2)]);
        opts = labels.map((label) => ({ label }));
        idx = labels.indexOf(s.answer);
        ask = s.ask ?? st?.ask ?? '';
      } else {
        const base = s.kind === 'zeit' ? ZEIT_OPTIONS : NEG_OPTIONS;
        opts = base;
        idx = base.findIndex((o) => o.id === s.answer);
        ask = s.kind === 'zeit' ? 'Wann passiert das?' : 'Stimmt es – oder nicht?';
      }
      stage.append(
        h('p', { class: 'note' }, ask),
        h('p', { class: 'text', lang: 'fr' }, frTypo(s.fr)),
        speakBtn(s.fr));
      say(s.fr);
      choices(stage, opts, idx, (ok) => {
        answer(s.id, ok);
        stage.append(h('div', { class: 'entry' + (ok ? '' : ' no') }, s.why));
        done(ok, `${s.fr} → ${opts[idx].label}`);
      });
    },
  });
}

function signalMenu() {
  const list = h('ul', { class: 'games' },
    ...SETS.map((s) => h('li', {}, h('a', { href: `#/signale/${s.n}` },
      h('span', { class: 'n' }, String(s.n)),
      h('span', { class: 't' }, s.title),
      h('span', { class: 'm' }, '→'),
      h('span', { class: 'd' }, s.sub)))),
    h('li', {}, h('a', { href: '#/signale/mix' },
      h('span', { class: 'n' }, '✱'), h('span', { class: 't' }, 'Alles gemischt'), h('span', { class: 'm' }, '→'),
      h('span', { class: 'd' }, 'Zwölf Sätze aus allen Signalen'))));
  screen('Signale',
    h('p', { class: 'prompt' }, 'Zwölf kleine Signale verraten, was ein Satz bedeutet: vorbei oder später, ja oder nein, wer tut was.',
      h('small', {}, 'Jede Serie dauert etwa zwei Minuten.')),
    list);
}
