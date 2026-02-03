import express from "express";
import {subscribe} from "../controllers/subscription.controller.js";
import {protect} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, subscribe);

export default router;