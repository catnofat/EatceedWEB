import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

export const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response)
  }
)
