import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
	baseURL: config.baseURLForAPI ?? "localhost:3000",
});

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");

	if (!token) {
		return config;
	}

	config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default axiosInstance;
