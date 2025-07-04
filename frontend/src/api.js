import axios from 'axios';
// this fetches data from the backend api and also proives the category filter
const API_BASE = 'http://localhost:8081/api'

export const fetchReports = (category) => {
    const url = category ? `${API_BASE}/reports?category=${category}` : `${API_BASE}/reports`;
  return axios.get(url);
}