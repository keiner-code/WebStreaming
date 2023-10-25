import { defineStore } from 'pinia'
import { db } from '@/utils/firebase'
import type { createSaleAccountDto, Profile } from '@/types/index'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useStreamingAuthStore } from './auth'
import type { SaleAccount } from '@/types/index'

const initialAccounts: SaleAccount[] = []

export const useSalesAccountsStore = defineStore('sales', {
  state: () => ({
    accounts: initialAccounts,
    btnPagination: 0
  }),
  getters: {
    getAllAccountByUser: (state) => (id: string, value: number) => {
      const paginationAccount: SaleAccount[][] = [[]]
      const accounts = state.accounts.filter((account) => account.IdUser == id)

      if (accounts.length <= 10) {
        return accounts
      } else {
        if (value == 999) {
          return accounts
        }
        let count = 0
        let maxcount = 0
        accounts.forEach((account) => {
          if (maxcount < 10) {
            paginationAccount[count].push(account)
          } else {
            count++
            maxcount = 0
            paginationAccount[count] = []
            paginationAccount[count].push(account)
          }
          maxcount++
        })
        state.btnPagination = paginationAccount.length
        return paginationAccount[value]
      }
    }
  },
  actions: {
    async create(sales: createSaleAccountDto) {
      try {
        const docRef = await addDoc(collection(db, 'salesAccounts'), sales)
        if (docRef.id) {
          this.discountMoney(sales.IdUser, sales.price)
            .then(() => {
              return true
            })
            .catch(() => false)
        }
      } catch (error) {
        return false
      }
    },
    async discountMoney(idUser: string, price: number) {
      const auth = useStreamingAuthStore()
      const profile: Profile = JSON.parse(sessionStorage.getItem('profile') as string)
      const priceTotal = profile.money - price
      auth
        .updatePriceUser(priceTotal, idUser)
        .then(() => {
          sessionStorage.setItem(
            'profile',
            JSON.stringify({
              ...profile,
              money: profile.money - price
            })
          )
          return true
        })
        .catch(() => false)
    },
    async getAllAccountUser() {
      this.accounts = []
      try {
        const querySnapshot = await getDocs(collection(db, 'salesAccounts'))
        querySnapshot.forEach((doc) => {
          this.accounts.push({
            title: doc.data().title,
            cliente: doc.data().cliente,
            correo: doc.data().correo,
            clave: doc.data().clave,
            pinPerfil: doc.data().pinPerfil,
            fechaInicial: doc.data().fechaInicial,
            fechaFinaliza: doc.data().fechaFinaliza,
            nota: doc.data().nota,
            IdUser: doc.data().IdUser,
            nameUser: doc.data().nameUser,
            price: doc.data().price,
            state: doc.data().state
          })
        })
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})
