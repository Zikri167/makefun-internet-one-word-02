// The Internet in One Word — entry: "funhouse"
//
// Why this word: the internet is a funhouse — a hall of distorted
// mirrors. Everything in it is warped, loud, a little creepy, and
// yet everyone keeps laughing inside it. One word, funny on its own,
// true of the whole internet, and surprising enough to stick.
//
// Behavior: writes exactly the word "funhouse" (8 characters, no
// trailing newline) to <output dir>/entry.txt. The output directory
// comes from the OUTPUT_DIR environment variable when set (used for
// local testing); otherwise it defaults to /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "funhouse";
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Make sure the output directory exists (e.g. a fresh /tmp test dir
// or a clean /output mount) instead of failing on the write below.
mkdirSync(outputDir, { recursive: true });

writeFileSync(outputPath, WORD, "utf8");
