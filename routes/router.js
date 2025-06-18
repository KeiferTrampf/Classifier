import { Router } from "express";
import aiController from "../controllers/aiController.js";
export const router = Router();

router.get("/", aiController.getHome);
