import { defineStore } from 'pinia'

export const useStreamingStore = defineStore('streaming', {
  state: () => ({
    dark: ''
  }),
  getters: {
    
  },
  actions: {
    changeDark(){
      this.dark == '' ? (this.dark = 'dark') : (this.dark = '')
    }
  }
})
