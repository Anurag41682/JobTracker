import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import deleteApplication from "../controllers/deleteApplication.js";
import deleteOldResume from "../middleware/deleteOldResume.js";
const router = express.Router();
router.delete(
  "/delete/:id",
  jwtAuthMiddleware,
  deleteOldResume,
  deleteApplication
);
export default router;
