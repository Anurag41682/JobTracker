import { fetchApplications, getProfilePictuerURL } from "../../api";
import { useEffect, useContext } from "react";
import isAuth from "../../utils/isAuth";
import { useNavigate } from "react-router-dom";
import MyDataContext from "../../ApplicationDataContext";
function Root() {
  const { _, setApplicationData, __, setPictureUrl } =
    useContext(MyDataContext);
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  useEffect(() => {
    if (isAuth(jwtToken)) {
      fetchApplications()
        .then((recieved) => {
          setApplicationData(recieved.data);
          localStorage.setItem("data", JSON.stringify(recieved.data));
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
      getProfilePictuerURL()
        .then((recieved) => {
          setPictureUrl(recieved.data.URL);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/login");
    }
  }, [jwtToken]);
}
export default Root;
