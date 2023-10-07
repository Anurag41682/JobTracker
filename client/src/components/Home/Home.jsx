import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function home() {
  const [showHome, setShowHome] = useState(false);
  const navigate = useNavigate();
  function isTokenExpired(jwtToken) {
    const currentTime = Date.now() / 1000;
    //atob is used to convert base64 to javascript string
    // split is used to convert a string into array of substring with the specified delimter in this case "."
    //json parse is used to conver jsonString to jsonObject
    const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
    return decodedToken.exp < currentTime; //return true if not expired
  }
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken && !isTokenExpired(jwtToken)) {
      setShowHome(true);
    } else {
      navigate("/login");
    }
  }, []);

  if (showHome) return <div style={{ textAlign: "center" }}>HomePage</div>;
  else return null;
}
export default home;
