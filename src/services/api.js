import axios from 'axios';


const API = "http://localhost:8080/api/auth"; // Adjust if needed

export const signup = (data) => axios.post(`${API}/signup`, data);
export const login = (data) => axios.post(`${API}/login`, data);






















// const API = axios.create({
//     baseURL: 'http://localhost:8080/api/auth',
// });
//
// API.interceptors.request.use((req) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         req.headers.Authorization = `Bearer ${token}`;
//     }
//     return req;
// });
//
// export default API;
//


