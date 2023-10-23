import axiosClient from './config/axiosClient.js'

export const register = async ({ name, email, password }) => {
  const response = await axiosClient.post('/auth/register', { name, email, password })
  return response.data
}
