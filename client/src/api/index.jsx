import axios from "axios";
const URL = "http://localhost:3001";
const API = axios.create({ baseURL: URL });
export const signup = (formData) => API.post("/signup", formData);
export const login = (formData) => API.post("/login", formData);
export const addApplication = (applicationData) =>
  API.post("/add", applicationData);
