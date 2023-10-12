import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import isAuth from "../../utils/isAuth";
import decodeFn from "../../utils/decodeFn";

function home() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);
  useEffect(() => {
    if (isAuth(jwtToken)) {
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
        <Header decoded={decodedToken} />
        <Landing />
        <Footer />
      </div>
    );
  else return null;
}
export default home;
