/**
 * v21 presents Thursday 19 November 2026 as a tactile, editorial news wall
 * built from cream paper, firm rules, and a deliberately printed visual voice.
 * The masthead establishes the edition at the top, while compact story cards
 * create a dense but readable rhythm across the rest of the page.
 * Every card carries a flat-vector art band, giving each report a distinct
 * colour-coded visual signature without relying on gradients or photographs.
 * A dedicated “WHERE IT HAPPENED” map panel provides the geographic spine
 * of the layout and turns the global edition into a quick visual itinerary.
 * Numbered pins on that panel correspond to the numbered story cards, so the
 * reader can connect each location to its report at a glance.
 * Rubber stamps add the language of a handled newsroom artifact: urgent,
 * selected, filed, and checked rather than polished into a generic dashboard.
 * The stamps, vector bands, and map pins work together as navigation cues,
 * separating the 33 reports while keeping them part of one coherent page.
 * Strong type, ink-like accents, and the warm stock background preserve the
 * handmade broadsheet character from the lead story through the final close.
 * The finished composition is a compact visual record of one day in the
 * world, with place, priority, and editorial status visible before the copy.
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
