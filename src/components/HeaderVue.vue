<template>
  <header class="md:h-18 flex justify-between bg-slate-50" :class="store.dark">
    <div
      class="w-2/12 md:hidden dark:bg-gray-700 dark:text-white flex flex-col items-center justify-center"
    >
      <button class="relative" @click="show = !show">
        <font-awesome-icon class="text-2xl" icon="bars" />
      </button>

      <Transition :duration="550" name="nested">
        <div class="absolute top-12 left-0 outer border dark:border-none" v-if="show">
          <div class="w-full dark:bg-gray-700">
            <div class="flex justify-end mr-2"><button @click="show = !show">X</button></div>
            <nav class="w-screen">
              <li class="list-none my-2 pl-2 hover:bg-gray-200">
                <RouterLink to="/home"  class="text-lg font-medium" >Inicio</RouterLink >
              </li>
              <li class="list-none my-2 pl-2 hover:bg-gray-200">
                <RouterLink to="/streaming" class="text-lg font-medium" >Streaming</RouterLink >
              </li>
              <li class="list-none my-2 pl-2 hover:bg-gray-200">
                <RouterLink to="" class="text-lg font-medium" >Soporte</RouterLink >
              </li>
              <li class="list-none my-2 mb-4 pl-2 hover:bg-gray-200">
                <RouterLink to="" class="text-lg font-medium" >About</RouterLink >
              </li>
            </nav>
          </div>
        </div>
      </Transition>
    </div>

    <div
      class="w-2/3 md:w-2/6 flex justify-center items-center gap-3 dark:bg-gray-700 dark:text-white"
    >
      <span class="flex md:flex-col items-center">
        <img
          class="w-10"
          src="https://img.freepik.com/vector-gratis/plantilla-logotipo-amigos_23-2149505594.jpg?w=826&t=st=1696638476~exp=1696639076~hmac=c07c64593250d4fddc5c36c9562bbb0153527e32d58de987b9a4fff5f1fb7ab2"
          alt="logo"
        />
        <p class="mx-2">KEYVICT - SAS</p>
      </span>
      <p class="text-gray-300 h-12 md:border-r-[1px] dark:border-gray-400"></p>
      <P class="font-medium border px-2 py-1 rounded-lg hidden md:block">V1.2.3</P>
    </div>

    <div class="flex md:w-full dark:bg-gray-700 dark:text-white pr-2">
      <nav class="md:flex gap-6 items-center w-5/6 justify-center hidden">
        <li class="list-none">
          <RouterLink to="/" class="hover:text-blue-500 text-lg font-medium" >Inicio</RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="/streaming" class="hover:text-blue-500 text-lg font-medium" >Streaming</RouterLink>
        </li>
        <li class="list-none">
          <RouterLink v-if="profile" to="" class="hover:text-blue-500 text-lg font-medium" >Cuentas</RouterLink>
        </li>
        <li class="list-none">
          <RouterLink to="" class="hover:text-blue-500 text-lg font-medium" >Soporte</RouterLink >
        </li>
        <li class="list-none">
          <RouterLink  to="" class="hover:text-blue-500 text-lg font-medium" >About</RouterLink >
        </li>
        <li v-if="profile?.rol == 'admin'" class="list-none">
          <RouterLink  to="/dashboard" class="hover:text-blue-500 text-lg font-medium" >Dashboard</RouterLink >
        </li>
      </nav>

      <div class="flex items-center md:w-11/12">
        <span class="h-8 rounded-md hidden md:block w-2/5 text-end">
        </span>

        <div class="flex items-center">
          <span
            class="hidden md:flex ml-4 items-center bg-black text-white px-1 rounded-md font-medium"
          >
            <font-awesome-icon icon="star" class="text-xs" />
            <p class="ml-1">2.5k</p>
          </span>
          <button @click="store.changeDark()"><font-awesome-icon icon="moon" class="ml-4" /></button>
        </div>

        <div v-if="!auth.login" class="ml-6 md:flex md:flex-row md:h-10 w-full gap-4">
          <RouterLink to="/session/login" class="text-center md:border w-32 md:p-2 md:rounded-lg md:border-blue-500 text-blue-500 hover:shadow-lg dark:text-white dark:border-white">
            Iniciar Sesion
          </RouterLink>
          <RouterLink to="/session/register" class="text-center md:border w-28 md:p-2 md:rounded-lg md:border-green-500 text-green-500 hover:shadow-lg dark:bg-white dark:text-black font-medium dark:border-white">
            Registrarse
          </RouterLink>
        </div>

        <div v-else class="ml-6 flex flex-col items-center justify-center md:w-36">
          <img
            class="w-10 rounded-full"
            src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=826&t=st=1696642069~exp=1696642669~hmac=a135841facbd00bdb18a3a0801087cd666faf6886a790f1b7d9aab5449638091"
            alt="avatar"
          />
          <div class="text-sm hidden md:block relative">
            {{ profile?.name }} {{ profile?.lastName }}
            <button @click="showUser = !showUser"><font-awesome-icon icon="chevron-down" /></button>
            <div class="absolute top-5 -left-5" v-show="showUser">
              <div
                class="text-blue-800 border px-4 pb-2 w-full rounded-lg dark:bg-gray-700 dark:text-white dark:border-none"
              >
                <p class="py-2">{{ profile?.email }}</p>
                <RouterLink v-if="profile?.rol == 'admin'" to="/dashboard" class="block my-2 hover:text-blue-500 text-violet-500" >Dashboard</RouterLink>
                <p class="py-2">{{ profile?.rol }}</p>
                <RouterLink v-if="profile?.rol == 'admin'" to="/session/register" class="block my-2 hover:text-blue-500 text-violet-500" >Register Admin</RouterLink>
                <hr class="py-1" />
                <button @click="auth.logoutUser()" class="hover:text-red-500" >Cerrar Session</button >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {useStreamingStore } from '../stores/streaming';
import { useStreamingAuthStore } from '@/stores/auth';
import type {Profile} from '@/types/index'

const show = ref<boolean>(false)
const showUser = ref<boolean>(false)
const profile = ref<Profile>()

const store = useStreamingStore();
const auth = useStreamingAuthStore();

onMounted(()=>{
    const data = sessionStorage.getItem('profile');
    if(data){
      profile.value = JSON.parse(data);
      auth.login = true;
    }
})

</script>

<style scoped>
.inner {
  background: #ccc;
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}
.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
