import axios from "axios";

const api = axios.create({
   // baseURL: "http://192.169.130.71:3000/"
   baseURL: "https://api.github.com"
})

export default api;