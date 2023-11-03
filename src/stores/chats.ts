import { realDatabase } from '@/utils/firebase'
import { defineStore } from 'pinia'
import { push, ref, set, onValue } from 'firebase/database'
import type { Message, ChatUser } from '@/types'

const initialUserChat: ChatUser[] = []
const initialUserMessage: Message[] = []

export const useChatsStore = defineStore('chats', {
  state: () => ({
    userChats: initialUserChat,
    userMessage: initialUserMessage
  }),
  getters: {},
  actions: {
    addMessage(message: Message, userId: string, channel: string) {
      try {
        const messageRef = ref(realDatabase, 'messages/' + channel + '/' + userId)
        const newMesageRef = push(messageRef)
        set(newMesageRef, message)
      } catch (error) {
        console.log(error)
      }
    },
    getChannelUser(idChannel: string) {
      try {
        const channelRef = ref(realDatabase, 'messages/' + idChannel)
        onValue(channelRef, (snapshot) => {
          this.userChats = []
          snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key // ID de usuario
            const value = childSnapshot.val()

            let name = 'Nombre no disponible'
            for (const prop in value) {
              if (typeof value[prop] === 'object' && 'name' in value[prop]) {
                name = value[prop].name
                break
              }
            }

            this.userChats.push({ idUser: key, name: name })
          })
        })
      } catch (error) {
        console.error(error)
      }
    },
    getMessages(userId: string, channelId: string) {
      try {
        const commentsRef = ref(realDatabase, 'messages/' + channelId + '/' + userId)
        onValue(commentsRef, (snapshot) => {
          this.userMessage = []
          snapshot.forEach((childSnapshot) => {
            this.userMessage.push(childSnapshot.val())
          })
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
