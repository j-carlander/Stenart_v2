import { runQuery } from "../db.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { resizeImage } from "../utils/imageHandler.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function addImageService({ alt, highlight, base64Img }) {
  try {
    const movieInsertQuery = `
      INSERT INTO images (alt, highlight)
      VALUES (?, ?)
    `;
    const movieValues = [alt, highlight];
    const { insertId: imageId } = await runQuery(movieInsertQuery, movieValues);

    await saveImage(imageId, base64Img);
    await scaleImage(imageId, getExtensionFromBase64(base64Img));
    await deleteImage(imageId, getExtensionFromBase64(base64Img));

    return { success: true, message: "Immage added successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Internal server error" };
  }
}

async function deleteImage(insertId, extension) {
  return new Promise((resolve, reject) => {
    fs.rm(join(__dirname, `${insertId}.${extension}`), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function scaleImage(insertId, extension) {
  return resizeImage(insertId, join(__dirname, `${insertId}.${extension}`));
}

async function saveImage(insertId, base64Img) {
  const promise = new Promise((resolve, reject) => {
    const extension = getExtensionFromBase64(base64Img);
    const filePath = join(__dirname, `${insertId}.${extension}`);

    fs.writeFile(filePath, base64Img.split(",")[1], "base64", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("The image was saved!");
      }
    });
  });

  return promise;
}

function getExtensionFromBase64(base64Img) {
  return base64Img.substring(
    base64Img.indexOf("/") + 1,
    base64Img.indexOf(";")
  );
}
