import Application from "../models/application.js";
const deleteApplication = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const deletedApplication = await Application.findByIdAndRemove(
      applicationId
    );
    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
};
export default deleteApplication;
