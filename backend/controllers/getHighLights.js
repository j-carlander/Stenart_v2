import { runQuery } from "../db.js";

export async function getHighLights(req, res) {
  const sql = `SELECT id, alt, highlight FROM images WHERE highlight is true;`;
  const result = await runQuery(sql);
  res.send(result);
}
