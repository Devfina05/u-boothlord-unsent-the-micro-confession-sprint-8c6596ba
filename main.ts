// Unsent: The Micro-Confession Sprint entry (Node 22, standard library
// only): writes a two-part micro-confession — a To: line and the unsent
// message itself, one line of at most 200 characters — to /output/entry.txt.
// Total entry is within 260 characters.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The confession: a resignation draft kept since the night the boss took
// credit for my launch. It stayed unsent because quitting felt like letting
// him off easy — so I stayed and let him keep the applause. Specific,
// honest, and the reason it stayed in drafts is felt: too late, too afraid,
// too kind all at once. The To: line and the message need each other.
// Verified by running the program: two parts, message within 200 chars,
// total within 260 chars.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'To: my old boss\nI still have the resignation draft from the night you took credit for my launch; I never sent it because quitting felt like letting you off easy, so I stayed and let you keep the applause.',
);
