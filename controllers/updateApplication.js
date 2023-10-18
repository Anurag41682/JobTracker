import Application from "../models/application.js";
const updateApplication = async (req, res) => {
  try {
    const existingApplication = await Application.findById(req.params.id);
    if (!existingApplication) {
      return res.status(404).json({ message: "Resource not found" });
    }
    const { jobTitle, companyName, applicationDate, status, jobDescription } =
      req.body;
    existingApplication.jobTitle = jobTitle;
    existingApplication.companyName = companyName;
    existingApplication.applicationDate = applicationDate;
    existingApplication.status = status;
    existingApplication.jobDescription = jobDescription;
    existingApplication.resumeFileName = req.file.filename;
    await existingApplication.save();
    res.status(200).json({
      message: "Resource updated successfully",
      existingApplication,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default updateApplication;
