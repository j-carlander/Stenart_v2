import { runQuery } from "../db.js";

export async function getExhibitions(req, res) {
  const sql = `SELECT title,
  location,
  fromdate ,
  todate,
  link ,
  description FROM exhibitions;`;
  const result = await runQuery(sql);
  console.log("Exhibition result: ", result);
  res.send(result);
}
