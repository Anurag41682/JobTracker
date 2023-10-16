import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import getDp from "../controllers/getDp.js";
const router = express.Router();
router.get("/getdp", jwtAuthMiddleware, getDp);
export default router;
