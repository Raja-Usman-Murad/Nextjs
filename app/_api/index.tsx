import axios from "axios";
import { URL } from "../_configs/config";

axios.defaults.baseURL = URL;

export default axios;
