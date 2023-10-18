import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import updateApplication from "../controllers/updateApplication.js";
import upload from "../middleware/uploadFile.js";
const router = express.Router();

router.patch(
  "/update/:id",
  jwtAuthMiddleware,
  upload.single("file"),
  updateApplication
);
export default router;
