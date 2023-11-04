import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import setDp from "../controllers/setDp.js";
import deleteOldDp from "../middleware/deleteOldDp.js";
import azureBlobUploader from "../middleware/azureBlobUploader.js";
const router = express.Router();
router.post("/setdp", jwtAuthMiddleware, azureBlobUploader, deleteOldDp, setDp);
export default router;
