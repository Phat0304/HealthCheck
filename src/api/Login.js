import axios from 'axios';

const API_BASE_URL = "http://172.16.43.98:3005"; 


export const checkLogin = (formData) => {
  console.log("data",formData)
  return axios.post(`${API_BASE_URL}/checkLogin`, formData);
};

// export const postExportData = (formData) => {
//   return axios.post(`${API_BASE_URL}/export`, formData);
// };

// export const postImport = (formData) => {
//   return axios.post(`${API_BASE_URL}/export`, formData);
// };


//1234
//mypassword123