// Last Text at One Percent — make.fun entry (program/v1, node22).
// The program writes exactly one text message to /output/entry.txt:
// the last text a phone sends at one percent battery, in the phone's
// own voice. The joke turns on survival: the phone endured fourteen
// drops, two toilets and a toddler, and what finally killed it was
// its owner watching videos at 3 a.m. on 2% — the phone, not the
// battery warning, gets the last word.
// The line is a fixed string: no input, no randomness, no network,
// no clock reads, so every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "1%. I survived 14 drops, two toilets, and a toddler. What killed me was you watching videos at 3 a.m. on 2%.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry.txt must not be only white space");
}
if (LINE.includes("\n")) {
  throw new Error("entry.txt must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
console.log(LINE);
