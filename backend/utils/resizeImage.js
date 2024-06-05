import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));

const destinationFolder = join(__dirname, "..", "..", "public/images");

const settings = {
  quality: 70,
  sizes: [
    { width: 30, height: 45 },
    { width: 400, height: 600 },
  ],
};

export async function resizeImage(insertId, fileToResize) {
  const sharpImage = sharp(fileToResize);

  for (let i = 0; i < settings.sizes.length; i++) {
    let width = settings.sizes[i].width;
    let height = settings.sizes[i].height;
    await sharpImage
      .resize({ width, height, quality: settings.quality })
      .webp()
      .toFile(join(destinationFolder, `${insertId}_w${width}.webp`));
  }
}
