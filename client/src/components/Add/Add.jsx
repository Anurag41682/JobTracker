import { useEffect, useState } from "react";
import isAuth from "../../utils/isAuth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import decodeFn from "../../utils/decodeFn";
function Add() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        architecto.
        <Footer />
      </div>
    );
  else return null;
}
export default Add;
