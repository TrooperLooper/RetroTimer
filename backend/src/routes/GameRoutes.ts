import express from "express";
import { getAllGames, getGameById } from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getAllGames);
router.get("/:id", getGameById);

export default router;
