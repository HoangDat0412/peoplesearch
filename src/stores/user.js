import router from '@/router'
import { service } from '@/service/baseService'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { TOKEN, csrftoken } from '@/utils/config'
import { notify } from '@kyvg/vue3-notification'

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
    logoutStatus: '',
    userUpdateResult: true
  }),
  getters: {},
  actions: {
    async register(data) {
      try {
        const result = await service.login(`AccountManagement/register/`, data)
        if (result?.status === 201) {
          notify({
            title: 'Register Success',
            type: 'success'
          })
          router.push({ path: '/login' })
        }
        if (result?.status === 409) {
          alert('Email already exists')
        }
      } catch (error) {
        console.log(error?.response?.status)
        if (error?.response?.status === 409) {
          notify({
            title: 'Email already exists ',
            type: 'error'
          })
        } else if (error?.response?.status === 400) {
          notify({
            title:
              'Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.',
            type: 'error'
          })
        } else {
          notify({
            title: 'False To Register',
            text: 'Please Check Your Information is valid',
            type: 'error'
          })
          console.log(error)
        }
      }
    },
    async login(data) {
      try {
        const result = await service.login(`AccountManagement/api/login/`, data)
        if (result?.status === 200) {
          Cookies.set(TOKEN, result.data.token, { expires: 30 })
          Cookies.set(csrftoken, result.data.csrf_token, { expires: 30 })
          router.push({ path: '/' })
        }
      } catch (error) {
        console.log(error)
        // this.userLogin = false
        alert('false')
      }
    },
    async getUserInformation() {
      try {
        const result = await service.get(`API/CurrentUserId/`)
        if (result?.status === 200) {
          this.userInformation = { ...result.data }
          console.log(this.userInformation)
        }
      } catch (error) {
        console.log(error)
        this.userInformation = false
      }
    },
    async logout() {
      try {
        Cookies.remove(TOKEN)
        this.$notify({
          title: 'Success',
          text: 'Logout Account!',
          type: 'success'
        })
        this.getUserInformation()
        router.push('/login')
      } catch (error) {
        this.$notify({
          title: 'Error',
          text: 'Logout Account False!',
          type: 'error'
        })
      }
    },
    async userUpdateInformation(data) {
      try {
        const result = await service.put('AccountManagement/UpdateUsername/ ', data)
        if (result.status === 200) {
          notify({
            title: 'Update username success',
            type: 'success'
          })
          return this.getUserInformation()
        }
      } catch (error) {
        notify({
          title: 'Update username false',
          type: 'error'
        })
        console.log(error)
      }
    }
  }
})
