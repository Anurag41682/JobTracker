import passport from "../config/passport-config.js";

const localAuthMiddleware = (req, res, next) => {
  passport.authenticate(
    "local",
    {
      session: false,
    },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        req.authInfo = {
          errorId: info.errorId,
          errorMessage: info.errorMessage,
        };
        return next();
      }
      req.user = user;
      next();
    }
  )(req, res, next);
};
export default localAuthMiddleware;
