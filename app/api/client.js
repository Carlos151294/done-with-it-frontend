import { create } from 'apisauce';

// Define the api
const apiClient = create({
   baseURL: 'http://192.168.1.69:9000/api'
 });

 export default apiClient;