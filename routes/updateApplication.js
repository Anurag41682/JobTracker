import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import updateApplication from "../controllers/updateApplication.js";
import azureBlobUploader from "../middleware/azureBlobUploader.js";
import deleteOldResume from "../middleware/deleteOldResume.js";
const router = express.Router();

router.patch(
  "/update/:id",
  jwtAuthMiddleware,
  azureBlobUploader,
  deleteOldResume,
  updateApplication
);
export default router;
