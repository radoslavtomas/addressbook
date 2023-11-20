import { axiosClient, baseURL } from './config/axiosClient.js'

export const register = async ({ name, email, password }) => {
  const response = await axiosClient.post('/auth/register', { name, email, password })
  return response.data
}

export const getCsrfCookie = async () => {
  // const response = await axiosClient.baseUrl(baseUrl).get('/sanctum/csrf-cookie')
  const response = await axiosClient({
    method: 'get',
    url: '/sanctum/csrf-cookie',
    baseURL
  })

  return response.data
}

export const login = async ({ email, password }) => {
  // const response = await axiosClient.baseUrl(baseUrl).post('/login', { email, password })
  const response = await axiosClient({
    method: 'post',
    url: '/login',
    baseURL,
    data: { email, password }
  })

  return response.data
}

export const logout = async () => {
  // const response = await axiosClient.baseUrl(baseUrl).post('/login', { email, password })
  const response = await axiosClient({
    method: 'post',
    url: '/logout',
    baseURL
  })

  return response.data
}

export const resetPassword = async ({ email, reset_url }) => {
  const response = await axiosClient({
    method: 'POST',
    url: '/forgot-password',
    data: { email, reset_url }
  })

  return response.data
}
