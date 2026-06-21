import axios from 'axios';

// Create an Axios instance with the base URL pointing to the backend server.
// The backend URL is stored in the Vite environment variable VITE_BACKEND_URL.
// Example: VITE_BACKEND_URL=https://my-backend.onrender.com

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
