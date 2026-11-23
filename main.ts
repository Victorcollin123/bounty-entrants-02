// bounty-entrants-02 entrypoint (Node 22, standard library only).
//
// The entry itself is the bounties named in BOUNTY.json: bounties of our own
// launched on make.fun, each charging an entry fee of at least $0.50. The
// house counts their paying entrants in make.fun's own database, so this
// program has one job only: copy BOUNTY.json from the repository into the
// output directory, where the gate reads it. Nothing it writes is scored.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/BOUNTY.json should then match this repository's BOUNTY.json.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Inside the grader these point at /bot and /output; the env vars let a
// local run stand in for both.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(repoDir, "BOUNTY.json");
const target = join(outputDir, "BOUNTY.json");

try {
  copyFileSync(source, target);
  console.log(`Copied BOUNTY.json from ${repoDir} to ${target}.`);
} catch (error) {
  console.error(`Could not copy BOUNTY.json from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}
