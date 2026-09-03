import sharp from "sharp";
import { readdir, stat, rename, unlink, writeFile } from "node:fs/promises";
import { join, extname, basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public/images");

// Per-directory limits and quality. Photos stay JPG, hero PNG stays PNG.
const RULES = [
  { dir: publicDir, maxW: 1920, quality: 82, recurse: false },
  { dir: join(publicDir, "programs"), maxW: 1600, quality: 82, recurse: false },
  { dir: join(publicDir, "news"), maxW: 1400, quality: 80, recurse: false },
  { dir: join(publicDir, "get-involved"), maxW: 1200, quality: 82, recurse: false },
  { dir: join(publicDir, "about"), maxW: 1400, quality: 82, recurse: false },
];

const TOUCH_EXTS = new Set([".jpg", ".jpeg", ".png"]);
const SKIP_DIRS = new Set(["logos"]); // logos already small, don't touch

async function processDir({ dir, maxW, quality }) {
  let files;
  try {
    files = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of files) {
    if (entry.isDirectory()) continue;
    const ext = extname(entry.name).toLowerCase();
    if (!TOUCH_EXTS.has(ext)) continue;
    const filePath = join(dir, entry.name);
    const before = (await stat(filePath)).size;
    // Skip already-tiny files
    if (before < 250 * 1024) {
      console.log(`skip  ${basename(dir)}/${entry.name}  (${(before / 1024).toFixed(0)}KB)`);
      continue;
    }

    const meta = await sharp(filePath).metadata();
    const targetW = Math.min(meta.width ?? maxW, maxW);
    const pipeline = sharp(filePath).rotate().resize({
      width: targetW,
      withoutEnlargement: true,
    });

    const isPng = ext === ".png";
    const buffer = isPng
      ? await pipeline.png({ compressionLevel: 9, quality }).toBuffer()
      : await pipeline.jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer();

    // Sharp on Windows can't write back to a file it's still reading; go via
    // an out-of-place temp file, then atomically replace the original.
    const tmpPath = `${filePath}.opt.tmp`;
    await writeFile(tmpPath, buffer);
    await unlink(filePath);
    await rename(tmpPath, filePath);
    const after = (await stat(filePath)).size;
    const saved = ((before - after) / before) * 100;
    console.log(
      `${basename(dir)}/${entry.name}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${saved.toFixed(0)}%)`
    );
  }
}

for (const rule of RULES) {
  await processDir(rule);
}
