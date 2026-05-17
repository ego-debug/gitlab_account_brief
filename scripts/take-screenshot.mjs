import { chromium } from "playwright";
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const url = process.argv[2];
const name = process.argv[3];
if (!url || !name) {
  console.error("Usage: node scripts/take-screenshot.mjs <url> <name>");
  process.exit(1);
}

const out = resolve(process.cwd(), `public/screenshots/${name}.jpg`);

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

const buf = await page.screenshot({ type: "png", fullPage: false });
await browser.close();

const compressed = await sharp(buf)
  .resize({ width: 1400, withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:2:0" })
  .toBuffer();

await writeFile(out, compressed);

const meta = await sharp(compressed).metadata();
console.log(`${name}.jpg: ${meta.width}x${meta.height}, ${(compressed.length / 1024).toFixed(0)}KB`);
