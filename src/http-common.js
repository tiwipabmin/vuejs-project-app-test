import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  },
})

http.interceptors.response.use(
  function (res) {
    return res.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default http
