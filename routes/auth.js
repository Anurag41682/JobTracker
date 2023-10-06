import express from "express";
import Login from "../controllers/login.js";
import Signup from "../controllers/signup.js";
import localAuthMiddleware from "../middleware/localStrategy.js";
const router = express.Router();
router.post("/login", localAuthMiddleware, Login);
router.post("/signup", Signup);

export default router;
