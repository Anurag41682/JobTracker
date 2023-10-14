import passport from "../config/passport-config.js";
// import passport from "passport";

// authentication using jwt strategy. It is used when there is already a token present on client side which is verified using this strategy.
const jwtAuthMiddleware = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    //info == third parameter inside passport-strategy's return
    if (err) {
      return next(err); // Handle errors by passing them to the error-handling middleware
    }
    if (!user) {
      req.authInfo = {
        errorMessage: info.message,
      };
      return next();
    }
    req.user = user;
    next();
  })(req, res, next);
};
export default jwtAuthMiddleware;
