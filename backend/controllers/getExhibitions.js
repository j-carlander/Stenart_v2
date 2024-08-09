import { runQuery } from "../db.js";

export async function getExhibitions(req, res) {
  const sql = `SELECT title,
  location,
  fromdate ,
  todate,
  link ,
  description FROM exhibitions;`;
  let result = await runQuery(sql);
  if (result[0].fromdate)
    result = result.map((exhibit) => ({
      ...exhibit,
      fromdate: Intl.DateTimeFormat("sv-SE", { dateStyle: "short" }).format(
        new Date(exhibit.fromdate)
      ),
      todate: Intl.DateTimeFormat("sv-SE", { dateStyle: "short" }).format(
        new Date(exhibit.todate)
      ),
    }));

  res.send(result);
}
