import { useEffect, useState } from "react";
import decodeFn from "../../utils/decodeFn";
import Header from "../Header/Header";
import isAuth from "../../utils/isAuth";
import { useNavigate } from "react-router-dom";
import ApplicationList from "../ApplicationList/ApplicationList";
function Info(props) {
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isAuth(jwtToken)) {
      setShow(true);
    } else {
      navigate("/login");
    }
  }, []);
  if (show)
    return (
      <>
        <Header decoded={decodedToken}></Header>
        <ApplicationList data={props.data}></ApplicationList>
      </>
    );
  else return null;
}
export default Info;
