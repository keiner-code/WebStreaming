<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div class="w-1/4 bg-slate-100 shadow-2xl rounded-lg flex flex-col items-center p-1">
      <h1 class="mt-4 mb-2 text-2xl font-medium">Registrarse</h1>
      <img
        class="w-1/4 rounded-full"
        src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671116.jpg?w=740&t=st=1697923861~exp=1697924461~hmac=79c5e6592f092deb47d61899ccef1a723d309290792bb4ee652ed5d8015bde08"
        alt="avatar"
      />
      <div class="w-full">
        <form @submit.prevent="handlerCreate" class="w-full">
          <div class="w-full my-4">
            <label for="nombre">Nombres</label>
            <input
              v-model="names"
              class="w-full border mt-0.5 h-8 outline-none rounded-md"
              type="text"
              placeholder="Ingrese Los Nombres"
            />
          </div>
          <div class="w-full my-4">
            <label for="nombre">Apellidos</label>
            <input
              v-model="lastNames"
              class="w-full border mt-0.5 h-8 outline-none rounded-md"
              type="text"
              placeholder="Ingrese Los Apellidos"
            />
          </div>
          <div class="w-full my-4">
            <label for="email">Correo Electronico</label>
            <input
              v-model="email"
              class="w-full border mt-0.5 h-8 outline-none rounded-md"
              type="email"
              placeholder="name@streaming.com"
            />
          </div>
          <div class="w-full my-4">
            <label for="password">Contraseña</label>
            <input
              v-model="password"
              class="w-full border mt-0.5 h-8 outline-none rounded-md"
              type="password"
              placeholder="**********"
            />
          </div>
          <div class="w-full my-4">
            <label for="perfil" class="">Perfil</label>
            <select v-model="rol" class="border w-full h-8 rounded-md outline-none">
              <option value="">Selecione Un perfil</option>
              <option value="user">Usuario</option>
              <option value="vendedor">Vendedor</option>
              <option v-if="profile?.rol == 'admin'" value="admin">Administrador</option>
            </select>
          </div>
          <div class="w-full my-4 flex justify-center">
            <button class="bg-green-500 rounded-md text-white p-2">Iniciar Session</button>
          </div>
          <div class="w-full my-4 flex justify-between px-2">
            <RouterLink to="/" class="text-blue-500">Regresar</RouterLink>
            <RouterLink to="/session/login" class="text-blue-500">Login</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStreamingAuthStore } from '@/stores/auth'
import type { Profile, createUserDto } from '@/types'

const email = ref('')
const password = ref('')
const names = ref('')
const lastNames = ref('')
const rol = ref('')
const profile = ref<Profile>()
const store = useStreamingAuthStore()

if (sessionStorage.getItem('profile')) {
  profile.value = JSON.parse(sessionStorage.getItem('profile') as string)
}

const handlerCreate = () => {
  const newUser: createUserDto = {
    email: email.value,
    password: password.value,
    name: names.value,
    lastName: lastNames.value,
    rol: rol.value,
    money: 0
  }
  store.registerUser(newUser)
}
</script>
