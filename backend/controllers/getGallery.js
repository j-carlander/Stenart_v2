import { runQuery } from "../db.js";

export async function getGallery(req, res) {
  const sql = `SELECT id, alt FROM images;`;
  const result = await runQuery(sql);
  console.log("Gallery result: ", result);
  res.send(result);
}
