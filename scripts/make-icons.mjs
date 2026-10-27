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

console.log(`wrote ${sizes.length} icons to public/icons/`);
