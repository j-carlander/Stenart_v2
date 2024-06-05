import { addExhibitService } from "../services/addExhibitService.js";

export async function postExhibit(req, res) {
  const result = await addExhibitService({ ...req.body });

  if (result.success) {
    res.status(201).json({ message: "Utställningen har lagts till." });
  } else {
    res.status(500).json({ error: "Internt serverfel!" });
  }
}
