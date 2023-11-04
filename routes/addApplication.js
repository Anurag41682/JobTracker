import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import Add from "../controllers/addApplication.js";
import azureBlobUploader from "../middleware/azureBlobUploader.js";
const router = express.Router();
// import multer from "multer";
// const upload = multer({ dest: "uploads/" });
//file name must be same as send from frontend (the key) in upload.single()

router.post("/add", jwtAuthMiddleware, azureBlobUploader, Add);
export default router;
