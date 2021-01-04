import { create } from 'apisauce';

// Define the api
const apiClient = create({
   baseURL: 'http://localhost:9000/api'
 });

 export default apiClient;