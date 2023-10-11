import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();
// definition of passport strategy I am using #1
// local strategy email password
// name of strategy , configuration definition
passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user)
          return done(null, false, {
            errorId: "invalid_email",
            errorMessage: "Invalid E-mail id",
          });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch)
          return done(null, false, {
            errorId: "incorrect_password",
            errorMessage: "Incorrect Password",
          });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
// definition of passport strategy I am using #2
// for stateless authentication
passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.secretKey,
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.id);
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        return done(null, user);
      } catch (error) {
        return done(error, false, {
          message: "Error while authenticating user!",
        });
      }
    }
  )
);

export default passport;
