import { axiosClient } from './config/axiosClient.js'

export const storeAddress = async ({
  address_line_1,
  address_line_2,
  address_line_3,
  city,
  postocde,
  country
}) => {
  const response = await axiosClient.post('/auth/register', { name, email, password })
  return response.data
}