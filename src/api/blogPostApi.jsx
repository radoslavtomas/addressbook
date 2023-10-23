import axiosClient from './config/axiosClient.js'

// const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const getBlogPosts = async () => {
  const response = await axiosClient.get('/posts')
  return response.data
}