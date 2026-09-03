import sharp from "sharp";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");

// Open Graph card spec: 1200 x 630 with the SHIFSD light logo centered on
// the Deep Canopy brand color, plus a Horizon Gold rule and a tagline.
const W = 1200;
const H = 630;
const BG = "#1E3A3A"; // Deep Canopy
const GOLD = "#F5B731"; // Horizon Gold

// Prepare the logo — sized so it visually anchors the card without dominating.
const logoPath = resolve(publicDir, "images/logos/logo-primary-light.png");
const logo = await sharp(logoPath)
  .resize({ width: 520, withoutEnlargement: false })
  .png()
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

// SVG overlay for tagline + rule so text renders crisp without a font system.
const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .tag { font: 600 22px 'Segoe UI', Arial, sans-serif; letter-spacing: 3px; fill: ${GOLD}; text-transform: uppercase; }
      .head { font: 600 44px 'Segoe UI', Arial, sans-serif; letter-spacing: -0.5px; fill: #FFFFFF; }
      .sub { font: 400 22px 'Segoe UI', Arial, sans-serif; fill: rgba(255,255,255,0.82); }
    </style>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" fill="${BG}"/>
  <rect x="${(W - 84) / 2}" y="${H - 210}" width="84" height="4" rx="2" fill="${GOLD}"/>
  <text x="${W / 2}" y="${H - 240}" text-anchor="middle" class="tag">Since 2000 · Monrovia, Liberia</text>
  <text x="${W / 2}" y="${H - 160}" text-anchor="middle" class="head">Practical Help for Self-Reliance</text>
  <text x="${W / 2}" y="${H - 110}" text-anchor="middle" class="sub">Agriculture · Education · Financial Sustainability</text>
</svg>`;

const output = resolve(publicDir, "og-image.png");
await sharp({
  create: {
    width: W,
    height: H,
    channels: 4,
    background: BG,
  },
})
  .composite([
    { input: Buffer.from(svg), top: 0, left: 0 },
    {
      input: logo,
      top: 130,
      left: Math.round((W - (logoMeta.width ?? 520)) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Generated ${output} (${W}x${H})`);

// ─── Favicon + Apple touch icon ──────────────────────────────────────
// Square Deep Canopy tile with the logo centered, sized generously so the
// wordmark remains readable when the browser renders it at 16-32px.
async function buildSquareIcon(size, outName) {
  const logoSize = Math.round(size * 0.78);
  const logoBuf = await sharp(logoPath)
    .resize({ width: logoSize, withoutEnlargement: false })
    .png()
    .toBuffer();
  const logoInfo = await sharp(logoBuf).metadata();
  const top = Math.round((size - (logoInfo.height ?? logoSize)) / 2);
  const left = Math.round((size - (logoInfo.width ?? logoSize)) / 2);
  const out = resolve(publicDir, outName);
  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logoBuf, top, left }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`Generated ${out} (${size}x${size})`);
}

await buildSquareIcon(512, "favicon.png");
await buildSquareIcon(180, "apple-touch-icon.png");

