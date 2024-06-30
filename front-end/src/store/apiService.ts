import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // Your backend API base URL
  withCredentials: true, // Send cookies with requests
});

export default apiClient;
