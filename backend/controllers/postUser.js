import bcrypt from "bcrypt";
import { runQuery } from "../db.js";

export async function postUser(req, res) {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const sqlQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  const result = await runQuery(sqlQuery, [name, email, hashed]);

  if (result.affectedRows === 1) {
    res.status(201).json({ message: "Kontot skapades" });
  } else {
    res.status(400).json({ message: "Kontot skapades inte" });
  }
}
