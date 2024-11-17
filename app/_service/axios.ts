import axios, { AxiosInstance } from "axios";
import Constant from "../_utils/constant";

class Service {
  axiosInstance: AxiosInstance;
  constructor(baseUrl: string, timeout: number, API_TOKEN?: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
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

const api = {
  githubService: new Service(
    Constant.BASE_URL,
    30000,
    process.env.NEXT_PUBLIC_GITHUB_API_TOKEN
  ),
};

export default api;
