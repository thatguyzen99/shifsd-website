import sharp from "sharp";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");

// Brand colors
const WARM_SAND = "#F4F0EB";
const DEEP_CANOPY = "#1E3A3A";
const HORIZON_GOLD = "#F5B731";

// ─── Open Graph card ─────────────────────────────────────────────────
// 1200 x 630 Warm Sand card with the primary brand icon (colorful
// palm-tree-in-circle mark) centered above the SHIFSD wordmark and
// tagline in Deep Canopy.
const W = 1200;
const H = 630;

const iconPath = resolve(publicDir, "images/logos/icon-primary.png");
const iconOG = await sharp(iconPath)
  .resize({ width: 340, withoutEnlargement: false })
  .png()
  .toBuffer();
const iconOGMeta = await sharp(iconOG).metadata();

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .brand { font: 700 68px 'Segoe UI', Arial, sans-serif; letter-spacing: -2px; fill: ${DEEP_CANOPY}; }
      .tag { font: 500 22px 'Segoe UI', Arial, sans-serif; fill: ${DEEP_CANOPY}; opacity: 0.72; letter-spacing: 0.5px; }
      .eyebrow { font: 600 16px 'Segoe UI', Arial, sans-serif; letter-spacing: 4px; fill: ${DEEP_CANOPY}; opacity: 0.55; text-transform: uppercase; }
    </style>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" fill="${WARM_SAND}"/>
  <rect x="0" y="0" width="${W}" height="8" fill="${HORIZON_GOLD}"/>
  <text x="${W / 2}" y="${H - 175}" text-anchor="middle" class="brand">SHIFSD</text>
  <text x="${W / 2}" y="${H - 130}" text-anchor="middle" class="tag">Practical Help for Self-Reliance</text>
  <text x="${W / 2}" y="${H - 60}" text-anchor="middle" class="eyebrow">Since 2000 · Monrovia, Liberia</text>
</svg>`;

const output = resolve(publicDir, "og-image.png");
await sharp({
  create: {
    width: W,
    height: H,
    channels: 4,
    background: WARM_SAND,
  },
})
  .composite([
    { input: Buffer.from(svg), top: 0, left: 0 },
    {
      input: iconOG,
      top: 110,
      left: Math.round((W - (iconOGMeta.width ?? 340)) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Generated ${output} (${W}x${H})`);

// ─── Favicon + Apple touch icon ──────────────────────────────────────
// Square Warm Sand tile with the icon centered. Padded so the mark stays
// legible when browsers render it at 16-32px.
async function buildSquareIcon(size, outName, bg = WARM_SAND) {
  const iconSize = Math.round(size * 0.78);
  const iconBuf = await sharp(iconPath)
    .resize({ width: iconSize, withoutEnlargement: false })
    .png()
    .toBuffer();
  const info = await sharp(iconBuf).metadata();
  const top = Math.round((size - (info.height ?? iconSize)) / 2);
  const left = Math.round((size - (info.width ?? iconSize)) / 2);
  const out = resolve(publicDir, outName);
  await sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  })
    .composite([{ input: iconBuf, top, left }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`Generated ${out} (${size}x${size})`);
}

await buildSquareIcon(512, "favicon.png");
await buildSquareIcon(180, "apple-touch-icon.png");
