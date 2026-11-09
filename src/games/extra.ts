import { h, runRounds, choices, tappableText, closePop } from '../lib/ui.ts';
import { say } from '../lib/speech.ts';
import { segment, norm } from '../lib/lexicon.ts';
import { answer, pick, shuffle, markPlayed } from '../lib/store.ts';
import { REVEAL, HUNT, type RevealItem, type HuntItem } from '../data/minigames.ts';

// ---------- Wort für Wort (Révélation mot par mot) ----------
export function enthuellen() {
  const pool = REVEAL.map((r) => ({ ...r, id: 'reveal:' + r.fr }));
  runRounds({
    title: 'Wort für Wort',
    items: pick(shuffle(pool), 8, 8),
    again: enthuellen,
    intro: () => h('p', { class: 'prompt' }, 'Ein Satz ist verdeckt. Tippe auf einzelne Wörter, um sie aufzudecken.',
      h('small', {}, 'Ziel: den Sinn erraten, mit so wenigen Wörtern wie möglich. Man muss nicht jedes Wort verstehen.')),
    render(it: RevealItem & { id: string }, stage, done) {
      markPlayed();
      const words: HTMLElement[] = [];
      let shown = 0;
      const p = h('p', { class: 'text', lang: 'fr' });
      for (const s of segment(it.fr)) {
        if (!s.word) { p.append(s.t); continue; }
        const span = h('span', { class: 'w veil' }, s.t);
        span.addEventListener('click', () => {
          if (!span.classList.contains('veil')) return;
          span.classList.remove('veil');
          shown++;
          counter.textContent = `${shown} von ${words.length} Wörtern aufgedeckt`;
        });
        words.push(span);
        p.append(span);
      }
      const counter = h('p', { class: 'note' }, `0 von ${words.length} Wörtern aufgedeckt`);
      const labels = shuffle([...it.opts]);
      stage.append(p, counter, h('p', { class: 'prompt' }, it.q));
      choices(stage, labels.map((label) => ({ label })), labels.indexOf(it.opts[0]), (ok) => {
        answer(it.id, ok);
        const full = tappableText(it.fr, it.gloss);
        p.replaceWith(full);
        say(it.fr);
        const few = shown <= Math.ceil(words.length / 2);
        counter.textContent = ok
          ? few ? `Stark: Du hast nur ${shown} von ${words.length} Wörtern gebraucht.` : `Richtig – mit ${shown} von ${words.length} Wörtern.`
          : `Nicht ganz: „${it.opts[0]}“. Lies den ganzen Satz – tippe Wörter an, die du nicht kennst.`;
        counter.className = 'entry' + (ok ? '' : ' no');
        done(ok, `${it.fr} → ${it.opts[0]}`);
      });
    },
  });
}

// ---------- Hörjagd (Chasse au son) ----------
export function jagd() {
  const pool = HUNT.map((x) => ({ ...x, id: 'jagd:' + x.fr }));
  runRounds({
    title: 'Hörjagd',
    items: pick(shuffle(pool), 10, 10),
    again: jagd,
    intro: () => h('p', { class: 'prompt' }, 'Du hörst einen Satz, siehst ihn aber nicht. Tippe jedes Mal auf den großen Knopf, wenn das gesuchte Wort fällt.',
      h('small', {}, 'Manchmal kommt es zweimal, manchmal gar nicht. Ton an – Kopfhörer helfen.')),
    render(it: HuntItem & { id: string }, stage, done) {
      markPlayed();
      let count = 0;
      const hits = h('span', { class: 'hunt-count', 'aria-live': 'polite' }, '0');
      const hit = h('button', { class: 'hunt-btn', lang: 'fr', onclick: () => { count++; hits.textContent = String(count); hit.classList.remove('pulse'); void hit.offsetWidth; hit.classList.add('pulse'); } },
        `« ${it.target} » !`);
      const play = (same: boolean) => { count = 0; hits.textContent = '0'; say(it.fr, { same }); };
      const finish = h('button', { class: 'btn', onclick: check }, 'Fertig');
      stage.append(
        h('p', { class: 'note' }, 'Gesucht:'),
        h('div', { class: 'hunt' }, hit, h('p', { class: 'note' }, 'Gezählt: ', hits)),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost', onclick: () => play(true) }, 'Nochmal'),
          h('button', { class: 'btn ghost', onclick: () => play(false) }, 'Andere Stimme')),
        finish);
      play(false);

      function check() {
        closePop();
        hit.disabled = true;
        finish.remove();
        stage.querySelector('.row')?.remove();
        const ok = count === it.n;
        answer(it.id, ok);
        const t = norm(it.target);
        const text = tappableText(it.fr, {}, undefined, (w) => (norm(w) === t ? 'picked' : ''));
        const times = it.n === 0 ? 'gar nicht' : it.n === 1 ? 'einmal' : it.n === 2 ? 'zweimal' : it.n === 3 ? 'dreimal' : `${it.n}-mal`;
        stage.append(text,
          h('button', { class: 'btn speak', onclick: () => say(it.fr, { same: true }) }, '▶ Mit Text anhören'),
          h('div', { class: 'entry' + (ok ? '' : ' no') },
            ok ? `Genau: „${it.target}“ kommt ${times} vor.` : `„${it.target}“ kommt ${times} vor – du hast ${count} gezählt.`,
            it.note ? h('p', {}, it.note) : null));
        done(ok, `${it.fr} (${it.target}: ${it.n})`);
      }
    },
  });
}
