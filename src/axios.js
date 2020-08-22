import axios from "axios";
import config from "./config/config.json";

var instance = axios.create({
  baseURL: config.serverURL,
});

export default instance;
