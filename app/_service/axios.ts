import axios, { AxiosInstance } from "axios";
import Constant from "../_utils/constant";

class Service {
  axiosInstance: AxiosInstance;
  constructor(baseUrl = Constant.BASE_URL, timeout = Constant.TIMEOUT) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }

  get(url: string, params = {}) {
    return this.axiosInstance.get(url, { ...params });
  }

  post(url: string, data = {}) {
    return this.axiosInstance.post(url, data);
  }
}

// API 객체 생성
const api = { githubService: new Service(Constant.BASE_URL) };

export default api;
