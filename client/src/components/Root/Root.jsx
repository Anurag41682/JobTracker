import { fetchApplications, getProfilePictuerURL } from "../../api";
import { useEffect, useContext } from "react";
import isAuth from "../../utils/isAuth";
import { useNavigate } from "react-router-dom";
import MyDataContext from "../../ApplicationDataContext";
import { fetchApplication } from "../../actions/applicationAction";
function Root() {
  const { _, dispatch, __, setPictureUrl } = useContext(MyDataContext);
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  useEffect(() => {
    if (isAuth(jwtToken)) {
      fetchApplication(dispatch);
      getProfilePictuerURL()
        .then((recieved) => {
          setPictureUrl(recieved.data.URL);
        })
        .catch((err) => {
          console.log(err);
        });
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [jwtToken]);
}
export default Root;
