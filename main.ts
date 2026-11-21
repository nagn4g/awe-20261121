import * as fs from 'node:fs';

const text = `On the dock, the water moves under you,
slow as breathing.
A heron stands in the shallows, asleep on one leg.
Above, the light of stars
that died before you were born
is still on its way down,
and it arrives, gently,
on the water beside the heron.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, text, 'utf8');
