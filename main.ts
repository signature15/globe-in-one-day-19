/**
 * This news image is composed as a cream-coloured broadsheet for one
 * carefully bounded day: Thursday 19 November 2026.
 * Its oversized masthead makes that full date the first thing a reader
 * sees, giving the page the authority and scale of a printed front page.
 * A world map panel anchors the centre of the composition and turns the
 * edition into a geographic record rather than a stack of local columns.
 * Numbered pins sit across the map to connect places with the reporting
 * gathered around them and to make the global spread easy to scan.
 * The surrounding layout reconciles 33 stories into one compact edition,
 * balancing major headlines with smaller dispatches without losing their
 * relationship to the map or to the day's larger picture.
 * Warm paper, strong rules, and restrained ink colours keep the image
 * feeling like a physical broadsheet while preserving a clear reading
 * order from the masthead through the map and into the story blocks.
 * A date-check footer closes the page by distinguishing events that belong
 * to Thursday 19 November 2026 from background or coverage carried over
 * from another news cycle, so the image remains a precise daily record.
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
