import fs from "fs";
import User from "../models/user.js";

async function deleteOldDp(req, res, next) {
  const jwtToken = req.headers.authorization;
  const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
  try {
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const oldDpPath = `./uploads/${user.dpFileName}`;
    if (fs.existsSync(oldDpPath)) {
      fs.unlinkSync(oldDpPath);
    }
  } catch (err) {
    console.error(`Error deleting file: ${err}`);
    return next(err);
  }
  next();
}

export default deleteOldDp;
