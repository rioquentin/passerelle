// node scripts/check.ts : liste les mots des histoires sans traduction, et la couverture par histoire.
import { STORIES, DETEKTIV } from '../src/data/stories.ts';
import { segment, lookup, nameGloss, norm, ENTRIES } from '../src/lib/lexicon.ts';

let bad = 0;
for (const s of [...STORIES, ...DETEKTIV]) {
  const missing = new Set<string>();
  let total = 0, core = 0;
  for (const seg of segment(s.text)) {
    if (!seg.word) continue;
    total++;
    const w = norm(seg.t);
    const e = lookup(w);
    if (e) { if (e.kind === 'k' || e.kind === 'f') core++; continue; }
    if (s.gloss[w] || nameGloss(w)) continue;
    missing.add(w);
  }
  console.log(`${s.id.padEnd(12)} ${total} Wörter, Kernwörter ${Math.round((core / total) * 100)} %`, missing.size ? `FEHLT: ${[...missing].join(', ')}` : '');
  bad += missing.size;
}
const dupes = ENTRIES.map((e) => e.fr).filter((f, i, a) => a.indexOf(f) !== i);
if (dupes.length) console.log('Doppelt:', dupes.join(', '));
console.log(`${ENTRIES.length} Einträge im Lexikon`);
process.exit(bad ? 1 : 0);
