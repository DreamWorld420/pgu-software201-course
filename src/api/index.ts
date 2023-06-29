import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
	baseURL: config.baseURLForAPI ?? "localhost:3000",
});

export default axiosInstance;
