import { h, screen, plaque, tappableText, choices, showPop, closePop, resolve, type Resolved } from '../lib/ui.ts';
import { say, sayAll, stop } from '../lib/speech.ts';
import { segment } from '../lib/lexicon.ts';
import { answer, isKnown, storyRead, storyState, getSpeed, setSpeed } from '../lib/store.ts';
import { STORIES, DETEKTIV, type Story } from '../data/stories.ts';

/** Heftseite: Seyès-Lineatur (Clairefontaine) unter dem Lesetext. */
const cahier = <T extends HTMLElement>(el: T): T => { el.classList.add('cahier'); return el; };

// ---------- Abdeckung berechnen ----------
export type WClass = 'known' | 'cog' | 'unk' | 'name';
export function classOf(r: Resolved | undefined): WClass {
  if (!r) return 'unk';
  if (r.name) return 'name';
  if (r.transparent) return 'cog';
  if (r.entry && isKnown(r.entry.id)) return 'known';
  return 'unk';
}

export function coverage(text: string, gloss: Record<string, string> = {}) {
  let total = 0, known = 0, cog = 0, core = 0;
  for (const s of segment(text)) {
    if (!s.word) continue;
    const r = resolve(s.t, gloss);
    const c = classOf(r);
    if (c === 'name') continue;
    total++;
    if (c === 'known') known++;
    if (c === 'cog') cog++;
    // noch nicht sicheres Kernwort: zählt fürs „Potenzial“
    if (c === 'unk' && r?.entry && (r.entry.kind === 'k' || r.entry.kind === 'f')) core++;
  }
  const p = (n: number) => (total ? Math.round((n / total) * 100) : 0);
  return { total, known, cog, core, pct: p(known + cog), potential: p(known + cog + core) };
}

function sentences(text: string): string[] {
  return text.replace(/[«»]/g, '').split(/(?<=[.!?…])\s+/).filter((s) => s.trim());
}

function gist(stage: HTMLElement, s: Story) {
  stage.append(h('p', { class: 'prompt' }, s.q.de));
  choices(stage, s.q.options.map((o) => ({ label: o })), s.q.answer, (ok) => {
    storyRead(s.id, ok);
    stage.append(h('div', { class: 'entry' + (ok ? '' : ' no') }, ok ? 'Genau. Du hast das Wesentliche verstanden.' : `Nicht ganz: „${s.q.options[s.q.answer]}“. Lies die Stelle nochmal – tippe unbekannte Wörter an.`));
  });
}

// ---------- 6. Wörter-Detektiv ----------
export function detektiv() {
  const s = [...DETEKTIV].sort((a, b) => (storyState(a.id)?.read ?? 0) - (storyState(b.id)?.read ?? 0))[0];
  const picked = new Set<HTMLElement>();
  const stage = h('div', { class: 'stage' });
  screen('Wörter-Detektiv', stage);
  const text = cahier(tappableText(s.text, s.gloss, (_w, span) => {
    if (picked.has(span)) { picked.delete(span); span.classList.remove('picked'); }
    else { picked.add(span); span.classList.add('picked'); }
    count.textContent = `${picked.size} markiert`;
  }));
  const count = h('span', { class: 'progress' }, '0 markiert');
  const solve = h('button', { class: 'btn', onclick: reveal }, 'Auflösen');
  stage.append(
    plaque(s.title, s.de),
    h('p', { class: 'prompt' }, 'Markiere jedes Wort, das du verstehst – ohne nachzuschlagen.',
      h('small', {}, 'Ganz ohne Lernen. Das ist alles schon in deinem Kopf.')),
    text, h('div', { class: 'row', style: 'align-items:center' }, solve, count));

  function reveal() {
    solve.remove(); count.remove();
    const found: string[] = [];
    let missed = 0;
    text.querySelectorAll<HTMLElement>('.w').forEach((span) => {
      const r = resolve(span.textContent!, s.gloss);
      const c = classOf(r);
      if (picked.has(span)) {
        found.push(`${span.textContent} = ${r?.de ?? '?'}`);
        if (r?.entry && c === 'cog') answer(r.entry.id, true);
      } else if (c === 'cog') { span.classList.add('cog'); missed++; }
    });
    const replay = text.cloneNode(true) as HTMLElement;
    replay.querySelectorAll<HTMLElement>('.w').forEach((span) => span.addEventListener('click', () => {
      const r = resolve(span.textContent!, s.gloss);
      showPop(span.textContent!, r?.de ?? 'Nicht im Wörterbuch');
    }));
    text.replaceWith(replay);
    stage.append(
      h('div', { class: 'result' },
        h('div', { class: 'big' }, String(new Set(found.map((f) => f.toLowerCase())).size)),
        h('p', { class: 'prompt' }, 'Wörter hast du verstanden, ohne sie je gelernt zu haben.',
          missed ? h('small', {}, `Gelb unterstrichen: ${missed} weitere, die du hättest erraten können. Tippe sie an.`) : null)),
      h('button', { class: 'btn speak', onclick: () => sayAll(sentences(s.text)) }, '▶ Jetzt anhören'),
      h('p', { class: 'note' }, 'Hören ist schwerer als Lesen – das ist normal. Die Wörter klingen anders, als sie aussehen.'));
    gist(stage, s);
    stage.append(h('div', { class: 'row' },
      h('button', { class: 'btn', onclick: detektiv }, 'Nächster Text'),
      h('a', { class: 'btn ghost', href: '#/', style: 'text-align:center;text-decoration:none;line-height:28px' }, 'Übersicht')));
  }
}

// ---------- 7. Geschichten ----------
export function geschichten() {
  const list = h('ul', { class: 'games' });
  STORIES.forEach((s, i) => {
    const c = coverage(s.text, s.gloss);
    const st = storyState(s.id);
    list.append(h('li', {}, h('a', { href: `#/geschichte/${s.id}` },
      h('span', { class: 'n' }, String(i + 1)),
      h('span', { class: 't', lang: 'fr' }, s.title),
      h('span', { class: 'm' }, st?.read ? 'gelesen' : ''),
      h('span', { class: 'd' }, `${s.de} · jetzt ${c.pct} %, mit allen Kernwörtern ${c.potential} %`))));
  });
  screen('Geschichten',
    h('p', { class: 'prompt' }, 'Lena zieht von Köln nach Toulouse. Immer dieselben Leute, immer dieselben Wörter – so bleiben sie hängen.'),
    list,
    h('p', { class: 'note', style: 'margin-top:14px' }, 'Der Prozentwert steigt, je mehr Kernwörter du übst. Er ist echt berechnet: durchsichtige Wörter + Wörter, die du schon sicher erkennst.'));
}

export function geschichte(id: string) {
  const idx = STORIES.findIndex((s) => s.id === id);
  const s = STORIES[idx];
  if (!s) { location.hash = '#/geschichten'; return; }
  const c = coverage(s.text, s.gloss);
  const stage = h('div', { class: 'stage' });
  screen('Geschichte ' + (idx + 1), stage);
  const speed = h('input', { type: 'range', min: '0.6', max: '1.1', step: '0.05', value: String(getSpeed()), 'aria-label': 'Sprechtempo' }) as HTMLInputElement;
  const speedLabel = h('span', { class: 'note' }, tempo(getSpeed()));
  speed.addEventListener('input', () => { setSpeed(Number(speed.value)); speedLabel.textContent = tempo(Number(speed.value)); });
  stage.append(
    plaque(s.title, s.de),
    h('div', {}, h('div', { class: 'meter' }, h('i', { style: `width:${c.pct}%` })),
      h('p', { class: 'note', style: 'margin-top:6px' }, `Du verstehst schon ca. ${c.pct} % der Wörter, mit allen Kernwörtern wären es ${c.potential} %. Tippe jedes Wort an, um es nachzuschlagen.`)),
    h('div', { class: 'row' },
      h('button', { class: 'btn speak', onclick: () => sayAll(sentences(s.text)) }, '▶ Vorlesen'),
      h('button', { class: 'btn ghost', onclick: () => { stop(); closePop(); } }, 'Stopp')),
    h('div', { class: 'slider' }, h('span', { class: 'note' }, 'Tempo'), speed, speedLabel),
    cahier(tappableText(s.text, s.gloss, (w, span, r) => {
      span.classList.add('flash');
      showPop(w, r?.de ?? 'Nicht im Wörterbuch');
      say(w, { rate: 0.8 });
    })),
  );
  gist(stage, s);
  const nextS = STORIES[idx + 1];
  stage.append(h('div', { class: 'row' },
    nextS ? h('a', { class: 'btn', href: `#/geschichte/${nextS.id}`, style: 'text-align:center;text-decoration:none;line-height:28px' }, 'Nächste Geschichte') : null,
    h('a', { class: 'btn ghost', href: '#/geschichten', style: 'text-align:center;text-decoration:none;line-height:28px' }, 'Alle Geschichten')));
}

function tempo(v: number) {
  return v < 0.75 ? 'langsam' : v < 0.95 ? 'gemütlich' : 'normal';
}

// ---------- 8. Textometer ----------
const SAMPLE = `Le musée des Augustins, à Toulouse, présente une exposition sur la peinture moderne. Les visiteurs peuvent découvrir des œuvres importantes de plusieurs artistes. L'entrée est gratuite le premier dimanche du mois. Le musée est fermé le mardi.`;

export function textometer() {
  const ta = h('textarea', { class: 'paste', lang: 'fr', placeholder: 'Französischen Text hier einfügen – eine Nachricht, ein Artikel, ein Rezept …' }) as HTMLTextAreaElement;
  const out = h('div', { class: 'stage' });
  const run = () => {
    closePop();
    const t = ta.value.trim();
    out.replaceChildren();
    if (!t) return;
    const c = coverage(t);
    const verdict = c.pct >= 95 ? 'Perfekt zum Lesen – fast alles ist klar.'
      : c.pct >= 85 ? 'Machbar. Mit ein paar Nachschlagen verstehst du den Sinn.'
      : c.pct >= 70 ? 'Noch zäh. Den Kern verstehst du, aber vieles fehlt.'
      : 'Noch zu schwer – das frustriert eher. Lieber erst die Geschichten.';
    out.append(
      h('div', { class: 'result' },
        h('div', { class: 'big' }, `${c.pct} %`),
        h('p', { class: 'prompt' }, verdict,
          h('small', {}, `${c.total} Wörter: ${c.cog} durchsichtig, ${c.known} schon gelernt, ${c.total - c.cog - c.known} noch neu – davon ${c.core} Kernwörter zum Üben (dann ${c.potential} %).`))),
      h('div', { class: 'meter' }, h('i', { style: `width:${c.pct}%` })),
      h('div', { class: 'legend' },
        h('span', {}, h('span', { class: 'w cog' }, 'gelb'), ' durchsichtig'),
        h('span', {}, 'schwarz: gelernt'),
        h('span', {}, h('span', { class: 'w unk' }, 'gepunktet'), ' noch neu')),
      tappableText(t, {}, undefined, (_w, r) => classOf(r)),
      h('p', { class: 'note' }, 'Forschung: ab etwa 95 % bekannter Wörter versteht man einen Text; ab 98 % liest man entspannt.'));
  };
  screen('Textometer',
    h('p', { class: 'prompt' }, 'Wie viel von diesem Text verstehst du schon?'),
    ta,
    h('div', { class: 'row' },
      h('button', { class: 'btn', onclick: run }, 'Messen'),
      h('button', { class: 'btn ghost', onclick: () => { ta.value = SAMPLE; run(); } }, 'Beispiel')),
    out);
}

