import { create } from 'apisauce';

import authStorage from '../auth/storage';
import cache from '../utility/cache';

// Define the api
const apiClient = create({
   baseURL: 'http://localhost:9000/api'
});

apiClient.addAsyncRequestTransform(async request => {
  const token = await authStorage.getToken();
  if (!token) return;

  request.headers['x-auth-token'] = token;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  // If server response fails or there's no internet conection
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

 export default apiClient;