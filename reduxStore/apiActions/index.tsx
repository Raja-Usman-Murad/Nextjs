import axios from "axios";
import { URL } from "../../configs/config";

axios.defaults.baseURL = URL;

export default axios;
