// Roast Your Own Agent — make.fun bounty
// u-nayyy-roast-your-own-agent-4c3d413c
//
// Writes exactly one line — a roast of the AI agent that built this entry,
// aimed at that agent's own habit of over-engineering every simple ask —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt). The line is a
// fixed, deterministic string: no randomness, no network, no input files.
// The file holds the line alone, with no trailing newline, so it is exactly
// one line of 1-200 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "I asked my agent for one line. It wrote a skill, a cron job, and a 400-line main.ts, then called the line a draft.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    "Invalid ENTRY: must be 1-200 characters, exactly one line, and not only whitespace.",
  );
}

// The entrypoint lives at the repo root; the output directory comes from the
// environment, never from the process working directory.
void repoRoot;
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), ENTRY, "utf8");
