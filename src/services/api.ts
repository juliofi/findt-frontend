import axios from 'axios'

const api = axios.create({
  baseURL: 'https://findt-backend.onrender.com' // nova URL do backend
})

export default api