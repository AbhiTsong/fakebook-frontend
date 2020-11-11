import axios from "axios";
import config from "./config/config";

let token = JSON.parse(localStorage.getItem("fakeTkn"));

var instance = axios.create({
  baseURL: config.serverURL,
});

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default instance;
