import { defineStore } from 'pinia'
import { auth, db } from '@/utils/firebase'
import type { Profile, User, createUserDto } from '@/types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'

const initialSupport: User[] = []

export const useStreamingAuthStore = defineStore('auth', {
  state: () => ({
    login: false,
    supports: initialSupport
  }),
  actions: {
    registerUser(user: createUserDto) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (userCredential) => {
          const { uid } = userCredential.user
          await addDoc(collection(db, 'user'), { ...user, id: uid })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async loginUser(email: string, password: string) {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user
          const acces_token = await user.getIdToken().then((token) => token)
          const { perfil, id } = await this.getPerfilUser(user.uid)

          const dataSession: Profile = {
            name: perfil.name,
            lastName: perfil.lastName,
            rol: perfil.rol,
            email: perfil.email,
            money: perfil.money,
            token: acces_token,
            id,
            idUser: perfil.id
          }
          sessionStorage.setItem('profile', JSON.stringify(dataSession))
        })
        .catch((error) => {
          new Error(`Error -> ${error}`)
        })
    },
    async getPerfilUser(id: string) {
      const querySnapshot = await getDocs(query(collection(db, 'user'), where('id', '==', id)))
      return {
        perfil: querySnapshot.docs[0].data(),
        id: querySnapshot.docs[0].id
      }
    },
    async logoutUser() {
      signOut(auth).then(() => {
        this.login = false
        sessionStorage.removeItem('profile')
      })
    },
    async updatePriceUser(price: number, id: string) {
      try {
        const userRef = doc(db, 'user', id)
        if (userRef.id) {
          await updateDoc(userRef, { money: price })
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getAllSupportsUser(){
      try {
        const querySnapshot = await getDocs(query(collection(db, 'user'), where('rol', '==', 'soporte')));
        querySnapshot.docs.forEach((user) => {
          this.supports.push({
            id: user.data().id,
            name: user.data().name,
            lastName: user.data().lastName,
            email: user.data().email,
            password: user.data().password,
            rol: user.data().rol,
            money: user.data().money
          });
          
        })
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
})
