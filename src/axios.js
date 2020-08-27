import axios from "axios";
import config from "./config/config.json";
import store from "./Redux/store";

let a = store.getState();
console.log("Store State", a);

// let AUTH_TOKEN =

var instance = axios.create({
  baseURL: config.serverURL,
});

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance;
