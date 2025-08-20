import axios from "axios";

export default {
  install: (app) => {
    // Create a default axios instance (you can set baseURL, headers, etc.)
    const axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:8000/api/v1/", // change to your Laravel backend API
      timeout: 10000,
    });

    // Make it available as $axios inside components
    app.config.globalProperties.$axios = axiosInstance;
  },
};
