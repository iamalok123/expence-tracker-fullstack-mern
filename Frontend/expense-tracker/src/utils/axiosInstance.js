import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;

            if (status === 401) {
                console.warn("Unauthorized! Redirecting to login...");
                // 🔒 Clear token before redirecting (prevents infinite loops)
                localStorage.removeItem("token");
                if (window.location.hash?.startsWith("#/") || window.location.hash === "#") {
                    window.location.hash = "#/login";
                } else {
                    window.location.href = "/#/login";
                }
            } else if (status === 500) {
                console.error("Internal Server Error. Please try again later.");
            } else if (status === 403) {
                console.error("Access denied.");
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("⏳ Request timeout. Please try again.");
        } else {
            console.error("❌ Network error:", error.message);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
