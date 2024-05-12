import router from '@/router'
import { service } from '@/service/baseService'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { XCSRFToken, session, token } from '@/utils/config'

export const useUserStore = defineStore('user', {
  state: () => ({
    userLogin: '',
    userInformation: {},
    userList: [],
    newuserlist: [],
    responseRegister: null,
    chechOutResult: null,

    updateSuccess: true,

    userUpdate: {},
    userUpdateResult: true
  }),
  getters: {},
  actions: {
    async register(data) {
      try {
        const result = await service.post(`/Register`, data)
        if (result?.status === 201) {
          router.push({ path: '/login' })
        }
        if (result?.status === 409) {
          alert('email đã tồn tại')
        }
      } catch (error) {
        if (error?.response?.status === 409) {
          alert('email đã tồn tại')
        } else {
          alert('false !')
          console.log(error)
        }
      }
    },
    async login(data) {
      try {
        const result = await service.login(`/Login/`, data)
        // console.log(result.headers['Set-Cookie'])
        if (result?.status === 200) {
          // console.log(result.data)
          // const { sessionid } = result.data
          // console.log('x-csrftoken', result.data['X-CSRFToken'])
          // console.log(session, result.data.sessionid)
          Cookies.set(session, result.data.sessionid, { expires: 30 })
          Cookies.set(XCSRFToken, result.data['X-CSRFToken'], { expires: 30 })
          Cookies.set(token, result.data['X-CSRFToken'], { expires: 30 })
        }
      } catch (error) {
        console.log(error)
        // this.userLogin = false
        alert('false')
      }
    },
    async getUserInformation() {
      try {
        const result = await service.get(`/CurrentUserId`)
        if (result?.status === 200) {
          this.userInformation = { ...result.data }
          console.log(this.userInformation)
        }
      } catch (error) {
        console.log(error)
        this.userInformation = false
      }
    },
    async getApi() {
      try {
        const result = await service.get(`/haha`)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    },
    async logout() {
      try {
        const result = await service.post('/Logout')
        if (result.status === 200) {
          alert('Logout success !')
          this.getUserInformation()
        }
      } catch (error) {
        alert(error.message)
      }
    },
    async updateUser(id, data) {
      try {
        const result = await service.post(`/user/update/${id}`, data)
        if (result.status === 200) {
          this.updateSuccess = result.data
          alert('Update thành công')
        } else {
          this.updateSuccess = false
        }
      } catch (error) {
        console.log(error)
      }
    },
    async userUpdateInformation(data) {
      try {
        const result = await service.post('/user/updateinformation', data)
        if (result.status === 200) {
          alert('Update success')
          return this.getUserInformation()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
