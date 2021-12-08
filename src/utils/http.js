import axios from "axios";
import Cookies from "js-cookie";

export function getAuthCredentials() {
  let token = Cookies.get("token");
  if (token) {
    return { token: JSON.parse(token), permissions: null };
  }
  return { token: null, permissions: null };
}

export function isAuthenticated() {
  let token = Cookies.get("token");
  if (token) {
    return true;
  }
  return false;
}

const http = axios.create({
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

http.interceptors.request.use(
  (config) => {
    const { token } = getAuthCredentials();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
