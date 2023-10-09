import decodeFn from "./decodeFn";
function isAuth(token) {
  if (!token) return false;
  const currentTime = Date.now() / 1000;
  const decodedToken = decodeFn(token);
  return decodedToken.exp >= currentTime;
}
export default isAuth;
