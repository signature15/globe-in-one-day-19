/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * The deliverable of this repository is one image, entry.png: the
 * entire day's world news laid out as a cream newsprint broadsheet,
 * dated Thursday 19 November 2026, and designed to be read front to
 * back like a single edition of a global paper.
 *
 * The page is assembled in layers, top to bottom:
 *
 *   1. Masthead - the paper's title block, carrying a red date tab
 *      stamped "Thursday 19 November 2026".
 *   2. Day-in-numbers strip - four figures that define the day: the
 *      ICJ's 9-6 genocide vote, Anthropic's $81bn IPO valuation, the
 *      M5.7 earthquake that struck Kumamoto, and UK inflation holding
 *      at 3.6%.
 *   3. Hero cards - the three stories above the fold: the three-way
 *      summit in Shenzhen, the ICJ ruling on Myanmar, and Anthropic
 *      ringing the bell at Nasdaq.
 *   4. Secondary tier - five cards developing the day's next-most
 *      important stories.
 *   5. Tertiary tier - seven shorter cards rounding out the edition.
 *   6. Evening briefs - twenty-four dispatches, one per world region,
 *      each tagged with the region it reports from.
 *   7. Date-check footer - a closing pass separating what actually
 *      occurred on this Thursday from anything merely carried over
 *      from the previous day's coverage.
 *
 * There is no rendering pipeline here: the broadsheet is finished
 * artwork committed to the repository. This script performs one
 * publication step only - it copies entry.png, byte for byte and
 * unmodified, into the directory named by the MAKEFUN_OUTPUT_DIR
 * environment variable, defaulting to /output when that variable is
 * unset.
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
