// Generates public/og-image.jpg (1200x630) for social sharing.
// Base: the son-cat street portrait (most on-brand), darkened at the
// bottom with a navy gradient so the name + tagline stay legible.
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200, H = 630;

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="42%" stop-color="#080C14" stop-opacity="0"/>
      <stop offset="100%" stop-color="#080C14" stop-opacity="0.94"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="64" y="500" font-family="Georgia, 'Times New Roman', serif" font-style="italic"
    font-size="76" fill="#ECEFF4">Amanda Richer</text>
  <text x="66" y="556" font-family="Georgia, 'Times New Roman', serif"
    font-size="27" fill="#DCB45C" letter-spacing="1.5">Displacement consultant &#183; Writer &#183; Visual artist</text>
</svg>`);

await sharp(join(root, 'public', 'photos', 'son-cat.jpg'))
  .resize(W, H, { fit: 'cover', position: 'north' })
  .modulate({ brightness: 0.92 })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 86 })
  .toFile(join(root, 'public', 'og-image.jpg'));

console.log('Wrote public/og-image.jpg');
