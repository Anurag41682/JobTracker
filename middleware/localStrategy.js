import passport from "../config/passport-config.js";

const localAuthMiddleware = passport.authenticate("local", {
  session: false,
});
export default localAuthMiddleware;
