import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import deleteApplication from "../controllers/deleteApplication.js";
const router = express.Router();
router.delete("/delete/:id", jwtAuthMiddleware, deleteApplication);
export default router;
