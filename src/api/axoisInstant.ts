import axios from 'axios';

export const axiosInstant = axios.create({
  baseURL: 'http://localhost:8080/api',
});
