import axios from 'axios';

const API_BASE_URL = "http://172.16.43.98:3005"; 


export const searchEmployeeById = (formData) => {
  
  return axios.post(`${API_BASE_URL}/selectHealthcareData`, formData);
};

export const ExportData = (formData) => {
 
    return axios.post(`${API_BASE_URL}/export-healthcare`, formData, {
    responseType: 'blob', 
  });
};

export const ImportData = (formData) => {
  console.log("APIok");
  return axios.post(`${API_BASE_URL}/importData`, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
})
};



