import axios from "axios";
const URL = "http://localhost:3001";
const jwtToken = localStorage.getItem("jwtToken");
const API = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${jwtToken}`, // Add the JWT token to the headers
    // "Content-Type": "multipart/form-data",
  },
});
export const signup = (formData) => API.post("/signup", formData);
export const login = (formData) => API.post("/login", formData);
export const addApplication = (applicationData) =>
  API.post("/add", applicationData);
