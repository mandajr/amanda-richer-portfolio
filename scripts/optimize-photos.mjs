// One-off: downscale gallery photos to web-friendly size/quality, in place.
// Run from project root: node scripts/optimize-photos.mjs
import sharp from 'sharp';
import { readdir, stat, rename } from 'node:fs/promises';
import path from 'node:path';

const dir = path.resolve('public/photos');
const MAX = 1600;       // longest edge, px
const QUALITY = 82;

const files = (await readdir(dir)).filter(f => /\.(jpe?g)$/i.test(f));

for (const f of files) {
  const src = path.join(dir, f);
  const tmp = src + '.tmp';
  const before = (await stat(src)).size;
  await sharp(src)
    .rotate()                                  // honor EXIF orientation
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);
  await rename(tmp, src);
  const after = (await stat(src)).size;
  const kb = n => Math.round(n / 1024) + 'KB';
  console.log(`${f.padEnd(22)} ${kb(before).padStart(7)} -> ${kb(after).padStart(7)}`);
}
