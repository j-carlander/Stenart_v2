import express from "express";
import { getGallery } from "../controllers/getGallery.js";

export const router = express.Router();

router.get("/gallery", getGallery);
