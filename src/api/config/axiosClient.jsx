import axios from 'axios'

const axiosClient = axios.create({
  // baseURL: 'https://snomapi.rdslv.com/api/v1',
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status

  // logging only errors that are not 401
  // if (statusCode && statusCode !== 401) {
  //   console.error(error)
  // }

  // if (statusCode && statusCode === 404) {
  //   console.error(error)
  //   window.location.replace('/login')
  // }

  console.log('error status: ', statusCode)
  console.error(error)

  return Promise.reject(error)
}

// registering the custom error handler to the "axiosClient" instance
axiosClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})

export default axiosClient