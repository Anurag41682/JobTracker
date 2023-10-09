import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
function home(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  //atob is used to convert base64 to javascript string
  // split is used to convert a string into array of substring with the specified delimter in this case "."
  //json parse is used to convert jsonString to jsonObject

  useEffect(() => {
    if (props.isAuth) {
      setShow(true);
    } else {
      navigate("/login");
    }
  }, []);
  if (show)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Header decoded={props.decoded} />
        <Landing />
        <Footer />
      </div>
    );
  else return null;
}
export default home;
