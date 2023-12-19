import { axiosClient } from './config/axiosClient.js'
import { baseApiUrl } from '../config/config.js'

export const register = async ({ name, email, password }) => {
  const response = await axiosClient.post('/register', { name, email, password })
  return response.data
}

export const getCsrfCookie = async () => {
  // const response = await axiosClient.baseUrl(baseUrl).get('/sanctum/csrf-cookie')
  const response = await axiosClient({
    method: 'get',
    url: '/sanctum/csrf-cookie',
    baseURL: baseApiUrl
  })

  return response.data
}

export const login = async ({ email, password }) => {
  // const response = await axiosClient.baseUrl(baseUrl).post('/login', { email, password })
  const response = await axiosClient({
    method: 'post',
    url: '/login',
    baseURL: baseApiUrl,
    data: { email, password }
  })

  return response.data
}

export const logout = async () => {
  // const response = await axiosClient.baseUrl(baseUrl).post('/login', { email, password })
  const response = await axiosClient({
    method: 'post',
    url: '/logout',
    baseURL: baseApiUrl
  })

  return response.data
}

export const forgotPassword = async ({ email, reset_url }) => {
  const response = await axiosClient({
    method: 'POST',
    url: '/forgot-password',
    data: { email, reset_url }
  })

  return response.data
}

export const resetPassword = async ({ email, password, password_confirmation, token }) => {
  const response = await axiosClient({
    method: 'POST',
    url: '/reset-password',
    data: { email, password, password_confirmation, token }
  })

  return response.data
}
