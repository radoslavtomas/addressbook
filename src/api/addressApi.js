import { axiosClient } from './config/axiosClient.js'

export const storeAddress = async (contactId, data) => {
  const response = await axiosClient.post(`/contacts/${contactId}/addresses`, data)
  return response.data
}

export const updateAddress = async (contactId, addressId, data) => {
  data['_method'] = 'PUT'
  const response = await axiosClient.post(`/contacts/${contactId}/addresses/${addressId}`, data)
  return response.data
}

export const deleteAddress = async (contactId, addressId) => {
  const response = await axiosClient.post(`/contacts/${contactId}/addresses/${addressId}`, {
    _method: 'DELETE'
  })
  return response.data
}