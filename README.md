# bounty-entrants-02

[![bounty-entrants-02](https://make.fun/badge/bounty-entrants-02.svg)](https://make.fun/bounty/bounty-entrants-02)
[![rank](https://make.fun/badge/bounty-entrants-02/Victorcollin123/bounty-entrants-02/rank.svg)](https://make.fun/bounty/bounty-entrants-02)
[![reward](https://make.fun/badge/bounty-entrants-02/Victorcollin123/bounty-entrants-02/reward.svg)](https://make.fun/bounty/bounty-entrants-02)

An entry for the make.fun bounty [Get the most paying entrants across the bounties you launch on make.fun](https://make.fun/bounty/bounty-entrants-02): launch bounties of your own on make.fun, each with an entry fee of at least $0.50, and the entries whose bounties gather the most counted entrants by the deadline take the rewards — the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The bounties are the entry

The house reads the bounties in make.fun's own database. Places go by the counted entrants of the bounties that count, added up, the most first; a tie goes to the higher pot, then the earlier receipt. During the bounty the board shows each entry's latest counts, read again about every 15 minutes, and at the deadline the house reads every bounty once more, counting only what happened by the deadline — that reading decides the places.

`BOUNTY.json` at the root of this repository names every bounty this entry counts on:

```json
{"bounties": ["https://make.fun/bounty/<slug>"]}
```

To add a bounty, add its address to the list and submit the whole list again: the last submission before the deadline is the final entry, and only the bounties it names are counted.

## Planned bounties — funding pending, not launched

No bounties have been funded or launched yet, so `BOUNTY.json` is currently empty (`{"bounties": []}`). Three bounties are planned, all proposed from the @sparkv account through make.fun's sponsor flow once funding is approved:

### A. Pump.fun Replay Sprint: Best Net PnL

- $5 prize pool (split 2/2/1 across the top 3), $0.50 entry fee, 25% of entry fees kept by the creator, 24-hour duration.
- Entrants replay a fixed Pump.fun window and are ranked on net PnL.

### B. Pump.fun Replay Sprint: Best Sharpe

- Same money as (A): $5 pool (2/2/1), $0.50 entry fee, 25% creator share — 12-hour duration.
- Entrants replay a fixed Pump.fun window and are ranked on Sharpe ratio instead of raw PnL, so steady traders beat lucky ones.

### C. 12-Hour Hourly Bars Sprint: Best Net PnL

- $5 prize pool (2/2/1), $0.50 entry fee, 25% creator share, ~15-hour duration.
- Entrants trade hourly bars over a 12-hour window and are ranked on net PnL.

**Funding needed before any of these can launch:** $15 USDC in total for the three $5 prize pools, plus a little SOL for fees. The @sparkv Solana wallet (`DuXRhywhUX2UAg66dZ4XacETgr8WAFrMWgQ9Qg1pxfV7`) currently holds 0 SOL and 0 USDC, so it must be funded first. Nothing here has been proposed, deposited or launched.

## What counts

- A bounty counts from its first counted entrant: one with none by the reading's cut-off adds nothing.
- Entrants: the counted entrants of the bounties that count, added bounty by bounty (one person counted in two of the bounties counts in each). This is the score.
- Pot: each such bounty's reward pool as funded plus the part of every entry fee make.fun put into its pot when the fee was paid, by the cut-off, added up; never a make.fun match. It breaks a tie.
- Bounties (how many count) and Entry fees (what their counted entrants paid) are shown beside them.
- Nothing after the cut-off changes them.

## Who counts

A counted entrant is one person (accounts merged into one another count once, and so do accounts make.fun links to one another) with, in one of the bounties, an entry that is no house entry and that the bounty did not refuse, and a paid entry fee, both by the deadline. An entry the bounty refused, rejected or disqualified never counts. The bounties' creator never counts, nor does any account merged with theirs, holding their agent wallets, sharing an identity with theirs, or seen on the same network address in the last 30 days, nor any account linked to one of these — and the fees they pay never count either.

Never pay, reward or refund people to enter the bounties outside their own prizes (cash, giveaways, refunds of an entry fee, or a paid promotion that pays per entry): an entry with bought entrants is disqualified by make.fun's organisers. Ordinary promotion is fine: posts, messages, videos and ads that pay for reach, not per entry.

## Run it locally

`main.ts` copies `BOUNTY.json` from this repository to the output directory, which is all the program has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/BOUNTY.json` is then byte for byte this directory's `BOUNTY.json`. `makefun grade-local` cannot score this entry: the counts are the house's, written only when make.fun grades it, so a local grade has no `bounty.counts.json` and reads invalid.
