import Axios from 'axios'
import { DOMAIN, TOKEN } from '../utils/config'
import Cookies from 'js-cookie'
class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'PUT',
      data: model,
      headers: { Authorization: 'Token ' + Cookies.get(TOKEN) } //JWT
    })
  }

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'POST',
      data: model,
      headers: { Authorization: 'Token ' + Cookies.get(TOKEN) } //JWT
    })
  }

  get = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'GET',
      data: model,
      headers: { Authorization: 'Token ' + Cookies.get(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    })
  }

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'DELETE',
      headers: { Authorization: 'Token ' + Cookies.get(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    })
  }

  upload = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'POST',
      data: model,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'Token ' + Cookies.get(TOKEN)
      } //JWT
    })
  }
  login = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'POST',
      data: model,
      headers: {
        'content-type': 'multipart/form-data'
      } //JWT
    })
  }
}

export const service = new baseService()
