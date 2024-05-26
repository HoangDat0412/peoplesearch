import router from '@/router'
import { service } from '@/service/baseService'
import { notify } from '@kyvg/vue3-notification'
import { defineStore } from 'pinia'
export const useSearchStore = defineStore('search', {
  state: () => ({
    chatDetail: [],
    searchResult: {},
    listChat: [],
    listHighlight: [],
    hightlightStatus: 0
  }),
  actions: {
    async SimpleSearchName(data, chatid) {
      try {
        //const result = await service.get(`API/GetByName/?name=${data}`)
        const result = await service.post(`API_Web/GeneralSearch/`, { search: data })
        this.searchResult = result.data
        if (result.status === 200) {
          let searchresult = result.data
          if (result.data.length === 0) {
            searchresult = []
          }
          const conversation = {
            content: {
              search: {
                search: data
              },
              result: searchresult
            },
            chat_id: chatid
          }
          await this.CreateConversation(conversation)
        }
      } catch (error) {
        const conversation = {
          content: {
            search: {
              name: data
            },
            result: []
          },
          chat_id: chatid
        }
        await this.CreateConversation(conversation)
      }
    },
    async CreateChatMultipleSearch(data) {
      try {
        const result = await service.post('API/ChatGetCreate/', {
          name:
            data.name ||
            data.email ||
            data.address ||
            data.national ||
            data.phone ||
            data.cccd ||
            data.gender ||
            data.linkfacebook,
          higlighted: 0
        })
        if (result.status === 201) {
          await this.MultipleSearch(data, result.data.id)
          await this.GetAllChat()
          router.push({ path: `/chat/${result.data.id}` })
        }
      } catch (error) {
        notify({
          title: 'Create chat false',
          type: 'error'
        })
      }
    },
    async MultipleSearch(data, chatid) {
      try {
        const result = await service.post(`API_Web/MultipleSearch/`, {
          data: data
        })
        this.searchResult = result.data
        if (result.status === 200) {
          let searchresult = result.data
          if (result.data.length === 0) {
            searchresult = []
          }
          const conversation = {
            content: {
              search: data,
              result: searchresult
            },
            chat_id: chatid
          }
          await this.CreateConversation(conversation)
        }
      } catch (error) {
        const conversation = {
          content: {
            search: {
              name: data
            },
            result: []
          },
          chat_id: chatid
        }
        await this.CreateConversation(conversation)
      }
    },
    async CreateChat(data) {
      try {
        const result = await service.post('API/ChatGetCreate/', data)
        if (result.status === 201) {
          console.log('Create chat', result.data)
          await this.SimpleSearchName(data?.name, result.data.id)
          await this.GetAllChat()
          console.log('redirect')
          router.push({ path: `/chat/${result.data.id}` })
        }
      } catch (error) {
        notify({
          title: 'Create chat false',
          type: 'error'
        })
        console.log(error)
      }
    },
    async GetAllChat() {
      try {
        const result = await service.get('API/ChatGetCreate/')
        if (result.status === 200) {
          this.listChat = [...result.data].reverse()
          const listHighlight = this.listChat.filter((item) => item.higlighted === 1)
          this.listHighlight = listHighlight
        }
      } catch (error) {
        console.log(error)
      }
    },
    async UpdateChat(id, data) {
      try {
        const result = await service.put(`AccountManagement/ChatsUpdateDelete/${id}/`, data)
        if (result.status === 200) {
          this.GetAllChat()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async DeleteChat(id) {
      try {
        const result = await service.delete(`AccountManagement/ChatsUpdateDelete/${id}`)
        if (result.status === 204) {
          notify({
            title: 'Delete Chat Success',
            type: 'success'
          })
          await this.GetAllChat()
        }
        if (result.status === 200) {
          await this.GetAllChat()
          notify({
            title: 'Delete Chat Success',
            type: 'success'
          })
        }
      } catch (error) {
        notify({
          title: 'Delete Chat False',
          type: 'error'
        })
        console.log(error)
      }
    },
    async CreateConversation(data) {
      try {
        const result = await service.post('API/ConversationGetCreate/', data)
        console.log('create conversation', result)
        if (result.status === 201) {
          console.log('chat_id', data.chat_id)
          this.GetChatDetail(data?.chat_id)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async GetChatDetail(id) {
      try {
        const result = await service.get(`API/ConversationGetCreate/?chat_id=${id}`)
        if (result.status === 200) {
          this.chatDetail = result.data
          console.log('chat detail', this.chatDetail)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
