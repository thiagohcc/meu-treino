import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL:"http://localhost:3001",
});

export const customerRequest = async <T>(endpoint: string, token: string) => {
    const response = await instance.post<T>(endpoint, token);
    return response.data;
};

export default instance;