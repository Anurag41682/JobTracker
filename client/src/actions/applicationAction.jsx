import { addApplication as apiAddApplication } from "../api";
import { fetchApplications as apiFetchApplication } from "../api";
import { deleteApplication as apiDeleteApplication } from "../api";
import { updateApplication as apiUpdateApplication } from "../api";

export const fetchApplication = (dispatch) => {
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
      console.log(error);
    });
};

export const deleteApplication = (dispatch, id) => {
  apiDeleteApplication(id)
    .then(() => {
      dispatch({ type: "DELETE_APPLICATION", payload: id });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateApplication = (dispatch, data, id) => {
  apiUpdateApplication(data, id)
    .then((recieved) => {
      window.alert(recieved.data.message);
      dispatch({
        type: "UPDATE_APPLICATION",
        payload: {
          updatedApplication: recieved.data.existingApplication,
          id: id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
