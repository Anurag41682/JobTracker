//atob is used to convert base64 to javascript string
// split is used to convert a string into array of substring with the specified delimter in this case "."
//json parse is used to convert jsonString to jsonObject
function decodeFn(token) {
  if (token) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  return null;
}
export default decodeFn;
