import axios from 'axios';
import LocalStorageService from '../services/localStorage';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(
    config => {
  
      const token = LocalStorageService.getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
  
      return config;
    },
    err => {
      Promise.reject(err);
    }
  );
  
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response?.status === 401) {
  
        LocalStorageService.clearToken();
        
        alert('No authorization pls. login again');

        window.location.reload();
  
        return Promise.reject(err);
      }
  
      return Promise.reject(err);
    }
  );
  
  export default axios;