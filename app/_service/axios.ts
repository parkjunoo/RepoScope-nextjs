import Constant from "../_utils/constant";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface ServiceConfig {
  baseUrl: string;
  timeout: number;
  apiToken?: string;
}

class Service {
  private axiosInstance: AxiosInstance;

  constructor({ baseUrl, timeout, apiToken }: ServiceConfig) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
      headers: {
        "Content-Type": "application/json",
        Authorization: apiToken ? `Bearer ${apiToken}` : "",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => config,
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error)
    );
  }

  public get<T>(
    url: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, { params });
  }

  public post<T>(
    url: string,
    data: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data);
  }
}

const api = {
  githubService: new Service({
    baseUrl: Constant.BASE_URL,
    timeout: 30000,
    apiToken: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
  }),
};

export default api;
