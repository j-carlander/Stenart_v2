import express from "express";
import { getGallery } from "../controllers/getGallery.js";
import { getHighLights } from "../controllers/getHighLights.js";

export const router = express.Router();

router.get("/gallery", getGallery);
router.get("/highlights", getHighLights);
