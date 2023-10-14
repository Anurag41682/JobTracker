import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import fetchApplications from "../controllers/fetchApplications.js";
const router = express.Router();
router.get("/applications", jwtAuthMiddleware, fetchApplications);
export default router;
