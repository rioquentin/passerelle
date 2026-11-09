// Mehrere Stimmen (HVPT): jedes Wort wird abwechselnd von verschiedenen französischen Stimmen gesprochen.
import { getSpeed } from './store.ts';

let voices: SpeechSynthesisVoice[] = [];
let turn = 0;

function load() {
  if (!('speechSynthesis' in window)) return;
  const all = speechSynthesis.getVoices();
  // Qualitätsstimmen nach vorn, „fr“ beliebiger Region
  voices = all.filter((v) => v.lang.toLowerCase().startsWith('fr'))
    .sort((a, b) => score(b) - score(a));
}
function score(v: SpeechSynthesisVoice): number {
  let s = 0;
  if (/natural|neural|premium|enhanced|online/i.test(v.name)) s += 3;
  if (/fr-FR/i.test(v.lang)) s += 1;
  return s;
}

if ('speechSynthesis' in window) {
  load();
  speechSynthesis.addEventListener('voiceschanged', load);
}

export function voiceCount(): number { return voices.length; }
export function hasSpeech(): boolean { return 'speechSynthesis' in window; }

export interface SayOpts { rate?: number; same?: boolean; onend?: () => void }

export function say(text: string, opts: SayOpts = {}) {
  if (!hasSpeech()) { opts.onend?.(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fr-FR';
  if (voices.length) {
    if (!opts.same) turn++;
    const v = voices[turn % Math.min(voices.length, 6)];
    u.voice = v;
    u.lang = v.lang;
    // Nur eine Stimme? Dann wenigstens Tonhöhe variieren.
    if (voices.length === 1) u.pitch = [1, 0.8, 1.2][turn % 3];
  }
  u.rate = opts.rate ?? getSpeed();
  if (opts.onend) u.onend = opts.onend;
  speechSynthesis.speak(u);
}

/** Liest mehrere Sätze nacheinander mit derselben Stimme (lange Texte brechen sonst in Chrome ab). */
export function sayAll(parts: string[], rate?: number) {
  if (!hasSpeech() || !parts.length) return;
  speechSynthesis.cancel();
  turn++;
  for (const p of parts) {
    const u = new SpeechSynthesisUtterance(p);
    u.lang = 'fr-FR';
    if (voices.length) { const v = voices[turn % Math.min(voices.length, 6)]; u.voice = v; u.lang = v.lang; }
    u.rate = rate ?? getSpeed();
    speechSynthesis.speak(u);
  }
}

export function stop() { if (hasSpeech()) speechSynthesis.cancel(); }
