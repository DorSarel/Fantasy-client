import { RequestOptions } from 'https';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:5001/api/v1/', // TODO: revert to real api when finsih
});

export class HttpClient {
  public static async get(endpoint: string, options?: RequestOptions | null, params?: any) {
    let axiosResponse: any;
    try {
      axiosResponse = await instance.get(endpoint, {
        headers: options?.headers,
        params: params,
      });
    } catch (error: any) {
      axiosResponse = {
        status: error.response?.status,
        headers: error.response?.headers,
        data: error.response?.data,
        message: error.message,
      };

      throw axiosResponse;
    }

    return axiosResponse;
  }

  public static async post(endpoint: string, data: any, options?: RequestOptions, params?: any) {
    let axiosResponse: any;
    try {
      axiosResponse = await instance.post(endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        params: params,
      });
    } catch (error: any) {
      axiosResponse = {
        status: error.response?.status,
        headers: error.response?.headers,
        data: error.response?.data,
        message: error.message,
      };

      throw axiosResponse;
    }

    return axiosResponse;
  }

  public static async put(endpoint: string, payload: any, options?: RequestOptions) {
    let axiosResponse: any;
    try {
      axiosResponse = await instance.put(endpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error: any) {
      axiosResponse = {
        status: error.response?.status,
        headers: error.response?.headers,
        data: error.response?.data,
        message: error.message,
      };

      throw axiosResponse;
    }

    return axiosResponse;
  }
}
