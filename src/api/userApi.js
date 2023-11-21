import { axiosClient } from './config/axiosClient.js'

export const getUser = async () => {
  const response = await axiosClient.get('/user/addresses')
  return response.data
}

export const updateProfile = async (data) => {
  const userId = data['user_id']
  delete data['user_id']

  data['_method'] = 'PUT'

  const response = await axiosClient.post(`users/${userId}`, data)
  return response.data
}

export const updatePassword = async (data) => {
  data['_method'] = 'PUT'

  const response = await axiosClient.post('/user/update-password', data)
  return response.data
}