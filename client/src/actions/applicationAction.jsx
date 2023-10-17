import { addApplication as apiAddApplication } from "../api";
import { fetchApplications as apiFetchApplication } from "../api";

export const fetchApplication = (dispatch) => {
  // console.log(dispatch);
  apiFetchApplication()
    .then((recieved) => {
      dispatch({ type: "FETCH_APPLICATION", payload: recieved.data }); //action objcet passed
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addApplication = (dispatch, formData) => {
  apiAddApplication(formData)
    .then((recieved) => {
      // add later something beautiful to give response to user for successful save.
      window.alert(recieved.data.message);
      dispatch({ type: "ADD_APPLICATION", payload: recieved.data.application });
    })
    .catch((error) => {
      // window.location.reload(); //reload to login page if the token is expired
      console.log(error);
    });
};
