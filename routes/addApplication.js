import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import Add from "../controllers/addApplication.js";
const router = express.Router();
router.post("/add", jwtAuthMiddleware, Add);
export default router;
