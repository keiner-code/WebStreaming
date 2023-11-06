<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div class="md:w-1/4 w-11/12 bg-slate-100 shadow-2xl rounded-lg flex flex-col items-center p-1">
      <h1 class="mt-4 mb-2 text-2xl font-medium">Iniciar Session</h1>
      <img
        class="w-1/4 rounded-full"
        src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671116.jpg?w=740&t=st=1697923861~exp=1697924461~hmac=79c5e6592f092deb47d61899ccef1a723d309290792bb4ee652ed5d8015bde08"
        alt="avatar"
      />
      <div class="mt-4 w-full">
        <form @submit.prevent="handlerLogin" class="w-full">
          <div class="w-full my-4">
            <label for="email">Correo Electronico</label>
            <input
              class="w-full border mt-0.5 h-8 outline-none rounded-md"
              type="email"
              placeholder="name@streaming.com"
              v-model="email"
            />
          </div>
          <div class="w-full my-4">
            <label for="password">Contraseña</label>
            <input
              class="w-full border mt-0.5 h-8 outline-none rounded-md"
              type="password"
              placeholder="**********"
              v-model="password"
            />
          </div>
          <div class="w-full my-4 flex justify-center">
            <button class="bg-green-500 rounded-md text-white p-2">Iniciar Session</button>
          </div>
          <div class="w-full my-4 flex justify-between px-2">
            <RouterLink to="/" class="text-blue-500">Regresar</RouterLink>
            <RouterLink to="/session/register" class="text-blue-500">Registrarse</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStreamingAuthStore } from '@/stores/auth'
import { useStreamingStore } from '@/stores/streaming'
import { useRouter } from 'vue-router'

const auth = useStreamingAuthStore()
const store = useStreamingStore()
const router = useRouter()
const email = ref('')
const password = ref('')

const handlerLogin = async () => {
  await auth.loginUser(email.value, password.value)
  const data = sessionStorage.getItem('profile')
  if (data) {
    router.push('/')
  } else {
    store.alert = {
      title: 'Correo o Contraseña Incorrecta',
      type: 'bg-red-500',
      body: 'El correo o la contraseña son incorrecto por favor verifique he intente de nuevo',
      icon: 'face-sad-tear',
      show: true
    }
  }
}
</script>
