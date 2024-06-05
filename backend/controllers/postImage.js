import { addImageService } from "../services/addImageService.js";

export async function postImage(req, res) {
  const result = await addImageService({ ...req.body });

  if (result.success) {
    res.status(201).json({ message: "Bilden har lagts till." });
  } else {
    res.status(500).json({ error: "Internt serverfel!" });
  }
}
