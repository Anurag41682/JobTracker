import Application from "../models/application.js";
const Add = async (req, res) => {
  try {
    if (req.authInfo) {
      return res.status(400).json({ error: req.authInfo.errorMessage });
    }
    const decodedToken = JSON.parse(
      atob(req.headers.authorization.split(".")[1])
    );
    const application = new Application({
      ...req.body,
      resumeFileName: req.file.filename,
      creator: decodedToken.id,
    });
    await application.save();
    res.status(201).json({ message: "Saved Successfully", application });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default Add;
