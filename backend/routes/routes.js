import express from "express";
import { getGallery } from "../controllers/getGallery.js";
import { getHighLights } from "../controllers/getHighLights.js";
import { postImage } from "../controllers/postImage.js";
import { postExhibit } from "../controllers/postExhibit.js";
import { getExhibitions } from "../controllers/getExhibitions.js";
import { postUser } from "../controllers/postUser.js";
import { validateToken } from "../middleware/validateToken.js";
import { login } from "../controllers/login.js";

export const router = express.Router();

router.get("/gallery", getGallery);
router.get("/highlights", getHighLights);
router.get("/exhibitions", getExhibitions);

router.post("/admin/login", login);

router.use(validateToken);

router.post("/admin/image", postImage);
router.post("/admin/exhibit", postExhibit);

router.post("/admin/user", postUser);
