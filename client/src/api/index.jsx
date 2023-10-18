import axios from "axios";
import URL from "../utils/url";

const API = axios.create({
  baseURL: URL,
});

const setAuthorizationHeader = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken) {
    API.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  }
};

export const signup = (formData) => {
  setAuthorizationHeader();
  return API.post("/signup", formData);
};

export const login = (formData) => {
  setAuthorizationHeader();
  return API.post("/login", formData);
};

export const addApplication = (applicationData) => {
  setAuthorizationHeader();
  return API.post("/add", applicationData);
};

export const fetchApplications = () => {
  setAuthorizationHeader();
  return API.get("/applications");
};

export const setProfilePicture = (profilePicture) => {
  setAuthorizationHeader();
  return API.post("/setdp", profilePicture);
};

export const getProfilePicture = () => {
  setAuthorizationHeader();
  return API.get("/getdp");
};

export const deleteApplication = (id) => {
  setAuthorizationHeader();
  return API.delete(`/delete/${id}`);
};

export const updateApplication = (data, id) => {
  setAuthorizationHeader();
  return API.patch(`/update/${id}`, data);
};
