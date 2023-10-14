import Application from "../models/application.js";
const fetchApplications = async (req, res) => {
  try {
    if (req.authInfo) {
      return res.status(400).json({ mssg: req.authInfo.errorMessage });
    }
    const jwtToken = req.headers.authorization;
    const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
    // console.log(decodedToken);
    try {
      const applications = await Application.find({
        creator: decodedToken.id,
      }).exec();
      res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ mssg: error });
    }
  } catch (error) {
    res.status(500).json({ mssg: error });
  }
};
export default fetchApplications;
