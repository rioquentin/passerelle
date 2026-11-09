import { say } from './speech.ts';
import { lookup, segment, nameGloss, norm, looksTransparent, type Entry } from './lexicon.ts';

type Child = Node | string | null | undefined | false;
export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K, attrs: Record<string, any> = {}, ...kids: Child[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else el.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids) if (c !== null && c !== undefined && c !== false) el.append(c);
  return el;
}

/** Typographie française : espace fine insécable avant ; : ! ? et à l'intérieur des guillemets. */
export function frTypo(t: string): string {
  return t.replace(/«[  ]*/g, '« ').replace(/[  ]*([»!?;:])/g, ' $1');
}

export const app = () => document.getElementById('app')!;

export function screen(title: string, ...kids: Child[]) {
  const root = app();
  root.replaceChildren(
    h('header', { class: 'top' },
      h('button', { class: 'back', onclick: () => { location.hash = '#/'; }, 'aria-label': 'Zurück' }, '← Zurück'),
      h('h1', {}, title),
      h('span', { class: 'progress', id: 'progress' }),
    ),
    ...kids.filter(Boolean) as Node[],
  );
  window.scrollTo(0, 0);
}

export function setProgress(t: string) {
  const p = document.getElementById('progress');
  if (p) p.textContent = t;
}

export function plaque(big: string, small?: string, sub?: string) {
  return h('div', { class: 'plaque' },
    h('div', { class: 'plaque-in' },
      small ? h('div', { class: 'small' }, small) : null,
      h('div', { class: 'big', lang: 'fr' }, frTypo(big)),
      sub ? h('div', { class: 'sub' }, sub) : null,
    ));
}

export function speakBtn(text: string, label = 'Anhören') {
  return h('button', { class: 'btn speak', onclick: () => say(text) },
    h('span', { 'aria-hidden': 'true' }, '▶'), label);
}

export function entryBox(ok: boolean, fr: string, de: string, note?: string) {
  return h('div', { class: 'entry' + (ok ? '' : ' no') },
    h('b', { class: 'fr', lang: 'fr' }, fr), ' — ', h('span', { class: 'de' }, de),
    note ? h('p', {}, note) : null);
}

// ---------- Wörter antippen ----------
let popEl: HTMLElement | null = null;
export function closePop() { popEl?.remove(); popEl = null; }

export function showPop(fr: string, de: string) {
  closePop();
  popEl = h('div', { class: 'pop', role: 'status' },
    h('button', { onclick: () => say(fr), 'aria-label': 'Anhören' }, '▶'),
    h('div', { class: 'de' }, h('div', { class: 'fr', lang: 'fr' }, fr), de),
    h('button', { onclick: closePop, 'aria-label': 'Schließen' }, '×'));
  document.body.append(popEl);
}

export interface Resolved { de: string; entry?: Entry; transparent: boolean; name: boolean }

export function resolve(word: string, gloss: Record<string, string> = {}): Resolved | undefined {
  const w = norm(word);
  const g = gloss[w];
  const e = lookup(w);
  // Glosse = Bedeutung im Kontext; der Lexikoneintrag zählt trotzdem für Fortschritt und Abdeckung
  if (g) return { de: g.replace(/^=/, ''), entry: e, transparent: g.startsWith('=') || (!!e && 'deb'.includes(e.kind)), name: false };
  if (e) return { de: e.de, entry: e, transparent: e.kind === 'd' || e.kind === 'e' || e.kind === 'b', name: false };
  const n = nameGloss(w);
  if (n) return { de: n.replace(/^=/, ''), transparent: n.startsWith('='), name: !n.startsWith('=') };
  if (looksTransparent(w)) return { de: '(wahrscheinlich durchsichtig – rate mal!)', transparent: true, name: false };
  return undefined;
}

/** Rendert einen Text; jedes Wort ist antippbar. classify gibt eine Zusatzklasse pro Wort zurück. */
export function tappableText(
  text: string,
  gloss: Record<string, string>,
  onTap?: (word: string, span: HTMLElement, r: Resolved | undefined) => void,
  classify?: (word: string, r: Resolved | undefined) => string,
) {
  const p = h('p', { class: 'text', lang: 'fr' });
  for (const s of segment(text)) {
    if (!s.word) { p.append(frTypo(s.t)); continue; }
    const r = resolve(s.t, gloss);
    const span = h('span', { class: 'w ' + (classify?.(s.t, r) ?? '') }, s.t);
    span.addEventListener('click', () => {
      if (onTap) onTap(s.t, span, r);
      else showPop(s.t, r?.de ?? 'Nicht im Wörterbuch');
    });
    p.append(span);
  }
  return p;
}

// ---------- Allgemeiner Ablauf ----------
export interface Round<T> {
  title: string;
  items: T[];
  render: (item: T, stage: HTMLElement, done: (correct: boolean, label?: string) => void) => void;
  intro?: () => Node;
  again: () => void;
}

export function runRounds<T>(r: Round<T>) {
  const stage = h('div', { class: 'stage' });
  screen(r.title, stage);
  let i = 0;
  const wrong: string[] = [];
  let right = 0;
  const next = () => {
    closePop();
    if (i >= r.items.length) return finish();
    setProgress(`${i + 1} / ${r.items.length}`);
    stage.replaceChildren();
    const item = r.items[i++];
    r.render(item, stage, (correct, label) => {
      if (correct) right++; else if (label) wrong.push(label);
      const btn = h('button', { class: 'btn', onclick: next }, i >= r.items.length ? 'Ergebnis' : 'Weiter');
      stage.append(btn);
      btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      btn.focus({ preventScroll: true });
    });
  };
  const finish = () => {
    setProgress('');
    stage.replaceChildren(
      h('div', { class: 'result' },
        h('div', { class: 'big' }, `${right} von ${r.items.length}`,
          right === r.items.length ? h('span', { class: 'annot', lang: 'fr' }, 'Très bien !')
          : right >= r.items.length * 0.7 ? h('span', { class: 'annot', lang: 'fr' }, 'Bien !') : null),
        h('p', { class: 'prompt' }, right === r.items.length ? 'Alles richtig. Sehr gut!' : right >= r.items.length * 0.7 ? 'Gut gemacht.' : 'Das kommt wieder – die Wörter tauchen bald nochmal auf.'),
        wrong.length ? h('div', {}, h('p', { class: 'note' }, 'Zum Wiedersehen:'), h('ul', {}, ...wrong.map((w) => h('li', {}, w)))) : null,
      ),
      h('div', { class: 'row' },
        h('button', { class: 'btn', onclick: r.again }, 'Noch eine Runde'),
        h('a', { class: 'btn ghost', href: '#/', style: 'text-align:center;text-decoration:none;line-height:28px' }, 'Übersicht')),
    );
  };
  if (r.intro) {
    stage.append(r.intro(), h('button', { class: 'btn', onclick: next }, 'Los geht’s'));
  } else next();
}

/** Antwortknöpfe; markiert richtig/falsch und sperrt danach. */
export function choices(
  stage: HTMLElement, opts: { label: string; hint?: string; fr?: boolean }[], correct: number,
  after: (ok: boolean, chosen: number) => void, cls = '',
) {
  const box = h('div', { class: 'options ' + cls });
  const btns = opts.map((o, j) => h('button', {
    class: 'opt' + (o.fr ? ' fr' : ''), lang: o.fr ? 'fr' : undefined,
    onclick: () => {
      btns.forEach((b) => (b.disabled = true));
      btns[correct].classList.add('ok');
      if (j !== correct) btns[j].classList.add('no');
      after(j === correct, j);
    },
  }, o.label, o.hint ? h('span', { class: 'hint' }, o.hint) : null));
  box.append(...btns);
  stage.append(box);
  return box;
}
