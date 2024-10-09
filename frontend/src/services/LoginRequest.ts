import axios, { AxiosError, AxiosInstance } from 'axios';

interface ApiResponse<T> {
  token: T | PromiseLike<T>;
  data: T;
}

const instance: AxiosInstance = axios.create({
  baseURL:"http://localhost:3001",
});

export const setToken = (token: string): void => {
  instance.defaults.headers.common["Authorization"] = token;
}

export const loginRequest = async <T>(endpoint: string, body: unknown) => {
    const response = await instance.post<ApiResponse<T>>(endpoint, body);
    return response.data;
};

export default instance;
