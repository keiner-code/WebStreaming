import { defineStore } from 'pinia'

export const useStreamingStore = defineStore('streaming', {
  state: () => ({
    dark: '',
    showdetails: false 
  }),
  getters: {
    
  },
  actions: {
    changeDark(){
      this.dark == '' ? (this.dark = 'dark') : (this.dark = '')
    },
    changeShowDetail(){
      this.showdetails = !this.showdetails;
    }
  }
})
