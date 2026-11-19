/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * What this repository ships is a single image, entry.png: a cream
 * newsprint broadsheet dated Thursday 19 November 2026, composed as if
 * the whole world's day had been set in type and squeezed onto one page.
 *
 * Read it from the top:
 *   - A masthead opens the page, with a red date tab pinned to it
 *     reading "Thursday 19 November 2026".
 *   - Underneath runs a day-in-numbers strip holding the day's four
 *     defining figures: the ICJ's 9-6 genocide vote, Anthropic's $81bn
 *     IPO valuation, the Kumamoto M5.7 earthquake, and UK inflation
 *     stuck at 3.6%.
 *   - Three hero cards carry the headlines of the day: the Shenzhen
 *     three-way summit, the ICJ's Myanmar ruling, and Anthropic's
 *     Nasdaq debut.
 *   - Five secondary cards and seven tertiary cards fill out the
 *     column inches beneath them.
 *   - Twenty-four evening briefs follow, each one tagged with the
 *     world region it came in from.
 *   - A date-check footer closes the page, dividing what genuinely
 *     happened on this Thursday from anything merely carried over
 *     from Wednesday.
 *
 * This script's sole task is publication: entry.png is copied,
 * untouched, into the output directory named by MAKEFUN_OUTPUT_DIR
 * (which falls back to /output when unset).
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
