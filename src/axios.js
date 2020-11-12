import axios from "axios";

let token = JSON.parse(localStorage.getItem("fakeTkn"));

var instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_END,
});

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default instance;
