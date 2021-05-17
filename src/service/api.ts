import axios from "axios";


const api = axios.create({
  baseURL: "https://entrevilas.rj.r.appspot.com/",
});

export default api;
