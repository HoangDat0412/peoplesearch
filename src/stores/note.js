import { service } from '@/service/baseService'
import { notify } from '@kyvg/vue3-notification'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({
    listNote: []
  }),
  actions: {
    async GetAllNote() {
      try {
        const result = await service.get(`API/UserNote/`)
        if (result.status === 200) {
          this.listNote = result.data
          console.log(this.listNote)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async CreateNote(id, data) {
      try {
        const result = await service.post(`API/UserNote/`, data)
        if (result.status === 201) {
          // await this.GetAllChat()
          this.CreateChatNoteRelation({
            chat_id: id,
            note_id: result.data?.id
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async UpdateNote(id, data) {
      try {
        const result = await service.put(`AccountManagement/NotesUpdateDelete/${id}/`, data)
        if (result.status === 200) {
          await this.GetAllNote()
          notify({
            text: 'Update note success',
            type: 'success'
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async DeleteNote(id) {
      try {
        const result = await service.delete(`AccountManagement/NotesUpdateDelete/${id}`)
        if (result.status === 200) {
          notify({
            title: 'Delete note success',
            type: 'success'
          })
          await this.GetAllNote()
        } else {
          notify({
            title: 'Delete note false',
            type: 'error'
          })
        }
      } catch (error) {
        notify({
          title: 'Delete note false',
          type: 'error'
        })
        console.log(error)
      }
    },
    async CreateChatNoteRelation(data) {
      try {
        const result = await service.post(`API/RelateNoteChatGetCreate/`, data)
        if (result.status === 201) {
          notify({
            title: 'Create Note Success',
            type: 'success'
          })
          this.GetAllNote()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
