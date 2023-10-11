import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// Asynchronous function because it involves operation on the database which will take time and we do not want to stop other part of the code from running.
const Signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    if (await User.findOne({ email }))
      return res.status(400).json({
        errorId: "email_taken",
        errorMessage: "Email-id is already associated with another account",
      });
    if (password !== confirmPassword)
      return res.status(400).json({
        errorId: "password_mismatch",
        errorMessage: "Password doesn't match",
      });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
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
    res.status(201).json({ token, message: "Signup Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default Signup;
