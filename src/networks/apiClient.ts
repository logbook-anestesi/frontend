import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  // Put your base URL here
  baseURL: "https://backend-dev-tbth.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor for authentication
axiosClient.interceptors.request.use((config) => {
  const token = Cookies.get("jwt_token");

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});

// Handle 401 error
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove("jwt_token");
      window.history.pushState(null, "", "/login");
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
