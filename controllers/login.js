import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
//authentication using local strategy
const Login = (req, res) => {
  const user = req.user;
  // Generate a JWT token and send it to client
  const token = jwt.sign({ userId: user._id }, process.env.secretKey, {
    expiresIn: "1h",
  });
  return res.json({ token });
};
export default Login;
