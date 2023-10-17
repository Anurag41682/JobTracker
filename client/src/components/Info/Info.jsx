import { useEffect, useState, useContext } from "react";
import decodeFn from "../../utils/decodeFn";
import Header from "../Header/Header";
import isAuth from "../../utils/isAuth";
import { useNavigate } from "react-router-dom";
import ApplicationList from "../ApplicationList/ApplicationList";
import MyDataContext from "../../ApplicationDataContext";
import { fetchApplication } from "../../actions/applicationAction";
function Info() {
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { applicationData: data, dispatch } = useContext(MyDataContext);
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
      <>
        <Header decoded={decodedToken} />
        <ApplicationList />
      </>
    );
  else return null;
}
export default Info;
