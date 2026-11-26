import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word — v2 entry.
// Winning word from blind pairwise judging: "funhouse".
// The whole internet is a funhouse: every door is a distorted mirror,
// every hallway bends, you came in for one thing and you leave hours
// later not knowing where you are — and you had fun anyway.
const WORD = "funhouse";

if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error(`entry word must be 1-30 letters, got: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
