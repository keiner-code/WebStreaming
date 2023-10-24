import { defineStore } from "pinia";
import { auth, db } from "@/utils/firebase";
import type { Profile, User, createUserDto } from "@/types";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const useStreamingAuthStore = defineStore('auth',{
  state: () => ({
    login: false,
    userMoney: 0
  }),
  actions: {
    registerUser(user: createUserDto){
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(async (userCredential) => {
        const {uid} = userCredential.user;
        await addDoc(collection(db, 'user'), {...user,id: uid})
      })
      .catch(error => {
        console.log(error);
      })
    },
    async loginUser(email: string, password: string){
     await signInWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const user = userCredential.user;
        const acces_token = await user.getIdToken().then(token => (token))
        const perfil = await this.getPerfilUser(user.uid) as User;
        const dataSession: Profile = {
          name: perfil.name,
          lastName: perfil.lastName,
          rol: perfil.rol,
          email: perfil.email,
          token: acces_token
        }
        sessionStorage.setItem('profile', JSON.stringify(dataSession));
        this.userMoney = perfil.money;
      })
      .catch(error =>{
        new Error(`Error -> ${error}`)
      });
    },
    async getPerfilUser(id: string){
      const querySnapshot = await getDocs(query(collection(db, 'user'), where('id', '==', id)))
      return querySnapshot.docs[0].data();
    },
    async logoutUser(){
      signOut(auth).then(() =>{
        this.login = false;
        sessionStorage.removeItem('profile')
      })
    }
  }
})