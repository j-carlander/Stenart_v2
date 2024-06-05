import { runQuery } from "../db.js";

export async function addExhibitService({
  title,
  location,
  fromdate,
  todate,
  link,
  description,
}) {
  try {
    const movieInsertQuery = `
      INSERT INTO exhibitions ( title,
        location,
        fromdate ,
        todate,
        link ,
        description)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const movieValues = [title, location, fromdate, todate, link, description];
    await runQuery(movieInsertQuery, movieValues);

    return { success: true, message: "Exhibit added successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Internal server error" };
  }
}
