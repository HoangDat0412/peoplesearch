import { service } from '@/service/baseService'
import { defineStore } from 'pinia'
export const useSearchStore = defineStore('search', {
  state: () => ({
    chatDetail: [],
    searchResult: {},
    listChat: []
  }),
  actions: {
    async SimpleSearchName(data) {
      // console.log('xin chào')
      try {
        const result = await service.get(`/GetByName/?name=${data}`)
        this.searchResult = result.data
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    },
    async CreateChat(data) {
      //   {
      //     "name":"chat 2",
      //     "higlighted": 1
      // }
      try {
        const result = await service.post('/ChatGetCreate', data)
        if (result.status === 201) {
          console.log(result)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async GetAllChat() {
      try {
        const result = await service.get('/ChatGetCreate')
        if (result.status === 200) {
          this.listChat = result.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async UpdateChat(id, data) {
      //   data = {
      //     "name":"chat 2",
      //     "higlighted": 1
      // }
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
    },
    async CreateConversation(data) {
      try {
        //   {
        //     "content": "new content of conversation",
        //     "chat_id": 8
        // }
        const result = await service.post('/ConversationGetCreate', data)
        if (result.status === 200) {
          console.log('success')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
