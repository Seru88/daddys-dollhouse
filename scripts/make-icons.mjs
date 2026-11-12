// Regenerate the PWA / apple-touch icon set from public/favicon.png.
// The source is 64x64, so the larger sizes are upscaled - the same source the
// old gatsby-plugin-manifest build used.
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const sizes = [48, 72, 96, 144, 180, 192, 256, 384, 512];

await mkdir('public/icons', { recursive: true });

for (const size of sizes) {
  await sharp('public/favicon.png')
    .resize(size, size, { fit: 'cover' })
    .png()
    .toFile(`public/icons/icon-${size}.png`);
}

// Maskable icons keep the art inside the safe zone (80% of the canvas) and
// fill the rest with the site background so launchers can crop freely.
const maskableSizes = [192, 512];

for (const size of maskableSizes) {
  const inner = Math.round(size * 0.8);
  const pad = Math.round((size - inner) / 2);

  await sharp(`public/icons/icon-${size}.png`)
    .resize(inner, inner, { fit: 'cover' })
    .extend({
      top: pad,
      bottom: size - inner - pad,
      left: pad,
      right: size - inner - pad,
      background: '#202023',
    })
    .flatten({ background: '#202023' })
    .png()
    .toFile(`public/icons/maskable-${size}.png`);
}

console.log(
  `wrote ${sizes.length} icons and ${maskableSizes.length} maskable icons to public/icons/`,
);
