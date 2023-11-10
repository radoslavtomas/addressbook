import { axiosClient } from './config/axiosClient.js'

export const storeContact = async (data) => {
  const response = await axiosClient.post('/contacts', data)
  return response.data
}

export const updateContact = async (contactId, data) => {
  data['_method'] = 'PUT'
  const response = await axiosClient.post(`/contacts/${contactId}`, data)
  return response.data
}

export const deleteContact = async (contactId) => {
  const response = await axiosClient.post(`/contacts/${contactId}`, {
    _method: 'DELETE'
  })
  return response.data
}