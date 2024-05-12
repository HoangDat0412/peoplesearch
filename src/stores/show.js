import { defineStore } from 'pinia'

export const useShowStore = defineStore('show', {
  state: () => ({
    showSidebar: true,
    sideright: false,
    showhome: false,
    searchpeople: false,
    searchfile: false,
    searchaudio: false,
    titlechat: false,
    setting: false
  }),
  actions: {
    async setShowSidebar(data) {
      this.showSidebar = data
    }
  }
})
