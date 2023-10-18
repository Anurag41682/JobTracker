import fs from "fs";
import Application from "../models/application.js";

async function deleteOldResume(req, res, next) {
  const applicationId = req.params.id;
  try {
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: "User not found" });
    }
    const oldResumePath = `./uploads/${application.resumeFileName}`;
    // console.log(fs.readFileSync("/", "utf-8")); used to read content of file
    // console.log(fs.readdirSync("./")); used to read content of folder
    if (fs.existsSync(oldResumePath)) {
      fs.unlinkSync(oldResumePath);
    }
  } catch (err) {
    console.error(`Error deleting file: ${err}`);
    return next(err);
  }
  next();
}

export default deleteOldResume;
