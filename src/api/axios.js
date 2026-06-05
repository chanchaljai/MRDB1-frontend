import axios from "axios";

const api = axios.create({
  baseURL: "https://mrdb1-backend.onrender.com/api",
  withCredentials: true,
});

export default api;
