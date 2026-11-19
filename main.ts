/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * The deliverable of this repository is entry.png, a 1024x1024 broadsheet
 * laid out like cream newsprint and covering a single day of world news.
 *
 * Page anatomy, top to bottom:
 *   - Masthead carrying the title, anchored by a red date tab stamped
 *     "Thursday 19 November 2026".
 *   - Day-in-numbers strip: the four figures that define the day - the
 *     ICJ's 9-6 genocide vote, Anthropic's $81bn IPO valuation, the
 *     Kumamoto M5.7 earthquake, and UK inflation holding at 3.6%.
 *   - Three hero cards: the Shenzhen three-way summit, the ICJ Myanmar
 *     ruling, and Anthropic's Nasdaq debut.
 *   - Five secondary cards and seven tertiary cards extending each story.
 *   - Twenty-four evening briefs, each tagged with its world region.
 *   - A date-check footer separating Wednesday's carryover from events
 *     that genuinely belong to this Thursday.
 *
 * main.ts publishes the entry: it copies entry.png into the output
 * directory (MAKEFUN_OUTPUT_DIR, defaulting to /output) unchanged.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
