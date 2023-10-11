import express from "express";
import jwtAuthMiddleware from "../middleware/jwtStrategy.js";
import Add from "../controllers/addApplication.js";
import upload from "../middleware/uploadFile.js";
const router = express.Router();
// import multer from "multer";
// const upload = multer({ dest: "uploads/" });
//file name must be same as send from frontend (the key) in upload.single()

router.post("/add", jwtAuthMiddleware, upload.single("file"), Add);
export default router;
