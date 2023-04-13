import axios from "axios";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    (config) => {
      config.withCredentials = true
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
});

export default newRequest;