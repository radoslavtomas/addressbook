import { axiosClient } from './config/axiosClient.js'

export const getUser = async () => {
  const response = await axiosClient.get('/user/addresses')
  return response.data
}