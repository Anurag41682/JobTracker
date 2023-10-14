import axios from "axios";
const URL = "http://localhost:3001";

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
