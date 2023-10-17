import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import isAuth from "../../utils/isAuth";
import decodeFn from "../../utils/decodeFn";
import MyDataContext from "../../ApplicationDataContext";
import { fetchApplication } from "../../actions/applicationAction";
function home() {
  const { applicationData: data, dispatch } = useContext(MyDataContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);
  useEffect(() => {
    if (isAuth(jwtToken)) {
      fetchApplication(dispatch);
      setShow(true);
    } else {
      navigate("/login");
    }
  }, [data]);
  if (show)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
