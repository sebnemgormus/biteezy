import express from "express"
import { addToCard, removeFromCard, getCard } from "../controllers/cardController.js"
import authMiddleware from "../middleware/auth.js";

const cardRouter = express.Router();

cardRouter.post("/add",authMiddleware, addToCard)
cardRouter.post("/remove",authMiddleware, removeFromCard)
cardRouter.post("/get",authMiddleware, getCard)

export default cardRouter;