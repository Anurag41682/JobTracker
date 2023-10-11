import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
//authentication using local strategy
const Login = (req, res) => {
  try {
    // if req.authInfo exist that means some error has occured while verification because it is created at the same time.
    if (req.authInfo) {
      return res.status(400).json({
        errorId: req.authInfo.errorId,
        errorMessage: req.authInfo.errorMessage,
      });
    }
    // verified successfully
    const user = req.user;
    // Generate a JWT token
    const token = jwt.sign(
      {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
      },
      process.env.secretKey,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
export default Login;
