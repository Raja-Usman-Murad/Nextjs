import axios from "axios";
export const URL = "https://nest-js-three.vercel.app/";
// export const URL = "http://localhost:3005/";

axios.defaults.baseURL = URL;

export { axios };
