// Fortschritt, nur im Browser. Wiederholung nach Leitner, unsichtbar in den Spielen.
const KEY = 'passerelle:v1';
const DAY = 86_400_000;
const INTERVALS = [0, 0.5 * DAY, 2 * DAY, 4 * DAY, 9 * DAY, 20 * DAY, 45 * DAY];

export interface WordState { box: number; due: number; seen: number; right: number }
interface Data {
  words: Record<string, WordState>;
  days: string[];
  stories: Record<string, { read: number; gist?: boolean }>;
  speed: number;
}

function blank(): Data {
  return { words: {}, days: [], stories: {}, speed: 0.85 };
}

let data: Data = blank();
try {
  const raw = localStorage.getItem(KEY);
  if (raw) data = { ...blank(), ...JSON.parse(raw) };
} catch { /* Privatmodus: dann eben ohne Speichern */ }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* egal */ }
}

function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function markPlayed() {
  const t = today();
  if (!data.days.includes(t)) { data.days.push(t); save(); }
}

export function daysThisMonth(): number {
  const prefix = today().slice(0, 7);
  return data.days.filter((d) => d.startsWith(prefix)).length;
}

export function lastPlayed(): string | undefined {
  return data.days[data.days.length - 1];
}

export function word(id: string): WordState | undefined {
  return data.words[id];
}

export function answer(id: string, correct: boolean) {
  const s = data.words[id] ?? { box: 0, due: 0, seen: 0, right: 0 };
  s.seen++;
  if (correct) { s.right++; s.box = Math.min(s.box + 1, INTERVALS.length - 1); }
  else s.box = Math.min(s.box, 1);
  s.due = Date.now() + INTERVALS[s.box];
  data.words[id] = s;
  markPlayed();
  save();
}

// „Erkannt“ = mindestens zweimal richtig in Folge (Box ≥ 2)
export function isKnown(id: string): boolean {
  return (data.words[id]?.box ?? 0) >= 2;
}
export function knownCount(ids: string[]): number {
  return ids.filter(isKnown).length;
}

// Auswahl: fällige zuerst, dann neue in Häufigkeitsreihenfolge, dann der Rest
export function pick<T extends { id: string }>(pool: T[], n: number, newMax = 4): T[] {
  const now = Date.now();
  const due = pool.filter((e) => data.words[e.id] && data.words[e.id].due <= now)
    .sort((a, b) => data.words[a.id].box - data.words[b.id].box);
  const allFresh = pool.filter((e) => !data.words[e.id]);
  const fresh = allFresh.slice(0, newMax);
  const out: T[] = [...due.slice(0, Math.max(0, n - fresh.length)), ...fresh].slice(0, n);
  const fill = (src: T[]) => { for (const e of src) { if (out.length >= n) return; if (!out.includes(e)) out.push(e); } };
  fill(due);
  fill(shuffle(pool.filter((e) => data.words[e.id])));
  fill(allFresh);
  return shuffle(out);
}

export function storyRead(id: string, gist?: boolean) {
  const s = data.stories[id] ?? { read: 0 };
  s.read++;
  if (gist !== undefined) s.gist = gist;
  data.stories[id] = s;
  markPlayed();
  save();
}
export function storyState(id: string) { return data.stories[id]; }

export function getSpeed() { return data.speed; }
export function setSpeed(v: number) { data.speed = v; save(); }

export function resetAll() { data = blank(); save(); }

export function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
