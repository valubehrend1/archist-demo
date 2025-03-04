// src/utils/apiClient.ts
import axios, { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_API_URL as string;
const API_TOKEN = import.meta.env.VITE_API_TOKEN as string;

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
  }
});

export default apiClient;
