import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const dir = "C:/Users/USER/Documents/SHIFSD/shifsd-website/shifsd-website/public/images/logos";
const files = (await readdir(dir)).filter((f) => f.endsWith(".png"));

for (const f of files) {
  const src = join(dir, f);
  const meta = await sharp(src).metadata();
  const trimmed = await sharp(src).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
  await sharp(trimmed.data).toFile(src);
  console.log(
    `${f}: ${meta.width}x${meta.height} -> ${trimmed.info.width}x${trimmed.info.height}`
  );
}
