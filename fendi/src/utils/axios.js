import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  // Set a timeout (throw error if server takes > 10 seconds)
  timeout: 80000,

  //  Set default headers
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
