import { service } from '@/service/baseService'
import { defineStore } from 'pinia'
export const useChatStore = defineStore('chat', {
  state: () => ({
    chatDetail: [],
    searchResult: {},
    listChat: []
  }),
  actions: {
    async UpdateChat(id, data) {
      //     data = {
      //       "name":"chat 2",
      //       "higlighted": 1
      //   }
      try {
        const result = await service.put(`AccountManagement/ChatsUpdateDelete/${id}`, data)
        if (result.status === 200) {
          await this.GetAllChat()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async DeleteChat(id) {
      //   data = {
      //     "name":"chat 2",
      //     "higlighted": 1
      // }
      try {
        const result = await service.delete(`AccountManagement/ChatsUpdateDelete/${id}`)
        if (result.status === 200) {
          await this.GetAllChat()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
