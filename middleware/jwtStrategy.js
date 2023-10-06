// import passport from "../config/passport-config.js";
import passport from "passport";

// authentication using jwt strategy. It is used when there is already a token present on client side which is verified using this strategy.
const jwtAuthMiddleware = passport.Authenticator("jwt", { session: false });
export default jwtAuthMiddleware;
