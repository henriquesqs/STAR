import axios from "axios";

const api = axios.create({
  baseURL: "http://159.89.50.193",
});

export default api;