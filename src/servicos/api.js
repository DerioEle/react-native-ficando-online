import axios from "axios";

const api = axios.create({
    baseURL: "http://192.169.104.28:3000/"
})

export default api;