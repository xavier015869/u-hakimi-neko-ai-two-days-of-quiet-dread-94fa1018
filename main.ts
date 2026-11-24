import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "LGTM. The tests pass, the types check, and I have made my peace with whatever this becomes in production.";

// The gate allows one line of 1 to 140 characters. Refuse to write
// anything that would fail it rather than submitting an invalid entry.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-140 single-line gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
