import User from "../models/user.js";
const setDp = async (req, res) => {
  const jwtToken = req.headers.authorization;
  const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: decodedToken.id }, // Query to find the user by their userId
      { $set: { dpFileName: `${req.blobName}` } }, // The key-value pair you want to update
      { new: true, upsert: true } // To return the updated document and add if not present
    );
    if (updatedUser) {
      res.status(200).json({
        mssg: "successfully Updated Image",
        fileName: `${req.blobName}`,
      });
    } else {
      console.log("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export default setDp;
