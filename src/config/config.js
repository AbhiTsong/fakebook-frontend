require("dotenv").config();

console.log("Yooooooooo", process.env);

const serverURL = process.env.BACK_END_URL;

export default serverURL;
