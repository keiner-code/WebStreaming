import { defineStore } from 'pinia'
import type { Streaming, Alert, createStreamingDto } from '../types/index'
import { db } from '../utils/firebase'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const initialAlert: Alert = {
  title: '',
  type: 'default',
  body: '',
  icon: '',
  show: false
}
const initialState: Streaming[] = []
const details: Streaming = {
  id: '',
  image: '',
  title: '',
  provider: '',
  description: '',
  duration: '',
  renewal: false,
  price: 0
}

export const useStreamingStore = defineStore('streaming', {
  state: () => ({
    tally: initialState,
    dark: '',
    showdetails: false,
    alert: initialAlert,
    detailsAccount: details
  }),

  getters: {
    getByIdTally:
      (state) =>
      (id: string): Streaming | undefined => {
        return state.tally.find((item) => item.id == id)
      },
    searchTallyByTitle: (state) => (title: string) => {
      return state.tally.filter((value) => value.title.toLowerCase().includes(title.toLowerCase()))
    }
  },
  actions: {
    changeDark() {
      this.dark == '' ? (this.dark = 'dark') : (this.dark = '')
    },
    changeShowDetail(details: Streaming) {
      this.detailsAccount = details
      this.showdetails = !this.showdetails
    },
    async create(data: createStreamingDto): Promise<boolean | undefined> {
      try {
        const docRef = await addDoc(collection(db, 'streaming'), data)
        if (docRef.id) {
          this.alert = {
            title: 'Cuenta Agregada',
            type: 'bg-green-500',
            body: 'Cuenta agregada con exito',
            icon: 'face-smile',
            show: true
          }
          return true
        }
      } catch (error) {
        this.alert = {
          title: 'Cuenta No Agregada',
          type: 'bg-red-500',
          body: `Cuenta No agregada ${error}`,
          icon: 'face-sad-tear',
          show: true
        }
        return false
      }
    },
    async getAllTally() {
      this.tally = []
      const querySnapshot = await getDocs(collection(db, 'streaming'))
      querySnapshot.forEach((doc) => {
        this.tally.push({
          id: doc.id,
          image: doc.data().image,
          title: doc.data().title,
          provider: doc.data().provider,
          description: doc.data().description,
          duration: doc.data().duration,
          renewal: doc.data().renewal,
          price: doc.data().price
        })
      })
    },
    async editTally(changes: createStreamingDto, id: string): Promise<boolean> {
      const tallyRef = doc(db, 'streaming', id)
      if (tallyRef.id) {
        await updateDoc(tallyRef, changes)
        return true
      } else {
        return false
      }
    },
    async deleteTally(id: string) {
      try {
        await deleteDoc(doc(db, 'streaming', id))
        this.alert = {
          title: 'Cuenta Eliminada',
          type: 'bg-red-500',
          body: 'Cuenta Eliminada con exito',
          icon: 'face-smile',
          show: true
        }
      } catch (error) {
        this.alert = {
          title: 'Cuenta No Eliminada',
          type: 'bg-red-800',
          body: `Cuenta No agregada ${error}`,
          icon: 'face-sad-tear',
          show: true
        }
      }
    }
  }
})
