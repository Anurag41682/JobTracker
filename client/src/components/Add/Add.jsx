import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Add(props) {
  const [show, setShow] = useState(false);
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        architecto.
        <Footer />
      </div>
    );
  else return null;
}
export default Add;
