import { DOMAIN } from '../utils/config'
import Cookies from 'js-cookie'
import { session, token } from '@/utils/config'
import axios from 'axios'
axios.defaults.withCredentials = false
axios.defaults.baseURL = DOMAIN
axios.interceptors.request.use(
  function (config) {
    const sessionid = Cookies.get(session)
    const csrftoken = Cookies.get(token)
    config.headers.Cookie = `csrftoken=${csrftoken};sessionid=${sessionid}`
    console.log(`csrftoken=${csrftoken};sessionid=${sessionid}`)
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

class baseService {
  put = (url, model) => {
    return axios.put(`${url}`, model)
  }

  post = (url, model) => {
    return axios.post(`${url}`, model)
  }
  login = (url, model) => {
    return axios.post(`${url}`, model)
  }

  get = (url) => {
    return axios.get(`${url}`)
  }

  delete = (url) => {
    return axios.delete(`${url}`)
  }
}

export const service = new baseService()
