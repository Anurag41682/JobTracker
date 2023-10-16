import User from "../models/user.js";
const getDp = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  try {
    const user = await User.findById(decodedToken.id);
    if (user) {
      res.status(200).json({ URL: user.dpURL });
    } else {
      console.log("User not found");
    }
  } catch (err) {
    console.log(err);
  }
};
export default getDp;
