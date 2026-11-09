import { RAW } from '../data/words.ts';
import { FALSE_FRIENDS } from '../data/falsefriends.ts';
import { NAMES } from '../data/stories.ts';

export type Kind = 'k' | 'd' | 'e' | 'b' | 'f';

export interface Entry {
  id: string; // = fr
  fr: string;
  de: string;
  kind: Kind;
  cat: string;
  forms: string[];
  hint?: string;
  rank: number;
}

export const ENTRIES: Entry[] = [];
const headwords = new Map<string, Entry>();
const forms = new Map<string, Entry>();

function norm(w: string): string {
  return w.toLowerCase().replace(/’/g, "'");
}

(function build() {
  let kind: Kind = 'k';
  let cat = '';
  let rank = 0;
  for (const line of RAW.split('\n')) {
    const l = line.trim();
    if (!l) continue;
    if (l.startsWith('##')) {
      const m = l.match(/^##\s+(\w)\s+(.*)$/);
      if (m) { kind = m[1] as Kind; cat = m[2]; }
      continue;
    }
    const [fr, de, f = '', hint = ''] = l.split('|');
    const e: Entry = { id: fr, fr, de, kind, cat, forms: f ? f.split(',') : [], hint: hint || undefined, rank: rank++ };
    ENTRIES.push(e);
  }
  for (const ff of FALSE_FRIENDS) {
    if (ff.fake || ff.friend) continue;
    if (ENTRIES.some((e) => e.fr === ff.fr)) continue;
    ENTRIES.push({ id: ff.fr, fr: ff.fr, de: ff.de, kind: 'f', cat: 'Falsche Freunde', forms: ff.forms ? ff.forms.split(',') : [], hint: ff.note, rank: rank++ });
  }
  for (const e of ENTRIES) {
    headwords.set(norm(e.fr), e);
  }
  for (const e of ENTRIES) {
    for (const f of e.forms) {
      const k = norm(f);
      if (!headwords.has(k) && !forms.has(k)) forms.set(k, e);
    }
  }
})();

export function lookup(word: string): Entry | undefined {
  const w = norm(word);
  return headwords.get(w) ?? forms.get(w);
}

export const CORE = ENTRIES.filter((e) => e.kind === 'k' && !e.fr.includes(' '));
export const CHUNKS = ENTRIES.filter((e) => e.kind === 'k' && e.fr.includes(' '));
export const COGNATES = ENTRIES.filter((e) => e.kind === 'd' || e.kind === 'e' || e.kind === 'b');

// Heuristique « probablement transparent » pour un mot inconnu (tamis EuroCom 7)
const SUFFIXES = [
  /tions?$/, /ités?$/, /iques?$/, /ismes?$/, /istes?$/, /ences?$/, /ances?$/, /ments?$/,
  /ifs?$/, /ives?$/, /elles?$/, /els$/, /ures?$/, /ogies?$/, /aphies?$/, /eurs?$/, /ables?$/, /ibles?$/,
];
export function looksTransparent(word: string): boolean {
  const w = norm(word);
  if (w.length < 6) return false;
  return SUFFIXES.some((r) => r.test(w));
}

export function nameGloss(word: string): string | undefined {
  return NAMES[norm(word)];
}

// Tokenisation : renvoie une suite de segments (mot ou séparateur)
export interface Seg { t: string; word: boolean }

const WORD_RE = /aujourd['’]hui|quelqu['’]un|[a-zà-ÿœæç]+['’]|[a-zà-ÿœæç]+(?:-[a-zà-ÿœæç]+)*/giu;

export function segment(text: string): Seg[] {
  const out: Seg[] = [];
  let last = 0;
  for (const m of text.matchAll(WORD_RE)) {
    const i = m.index ?? 0;
    if (i > last) out.push({ t: text.slice(last, i), word: false });
    const tok = m[0];
    // mots composés : garder entier s'il est au lexique, sinon découper
    if (tok.includes('-') && !lookup(tok)) {
      const parts = tok.split('-');
      parts.forEach((p, j) => {
        out.push({ t: p, word: true });
        if (j < parts.length - 1) out.push({ t: '-', word: false });
      });
    } else {
      out.push({ t: tok, word: true });
    }
    last = i + tok.length;
  }
  if (last < text.length) out.push({ t: text.slice(last), word: false });
  return out;
}

export { norm };
