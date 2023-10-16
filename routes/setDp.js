import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import setDp from "../controllers/setDp.js";
import upload from "../middleware/uploadFile.js";
const router = express.Router();
router.post("/setdp", jwtAuthMiddleware, upload.single("file"), setDp);
export default router;
