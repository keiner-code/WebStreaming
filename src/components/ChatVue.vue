<template>
  <div class="flex">
    <div class="w-1/3 px-2 flex flex-col">
      <div v-if="user.rol != 'soporte'">
        <h1 class="mt-2 font-medium text-lg ml-1">Canales De Atencion</h1>
        <div
          v-for="item in auth.supports"
          :key="item.id"
          class="flex px-1 p-1 items-center my-3 bg-gray-800 rounded-lg hover:bg-black cursor-pointer"
          @click="changeChanel(item.id, item.name)"
        >
          <img
            class="w-10 h-10 rounded-full mr-1"
            src="https://img.freepik.com/vector-gratis/centro-llamadas_24877-49036.jpg?w=740&t=st=1698362881~exp=1698363481~hmac=0db56f31d94066272e05d45dfcc4b4d5e359e9f34414edbba27f30fe017363bb"
            alt="avatar"
          />
          <div class="text-[.7rem]">
            <p class="text-white">{{ item.name }}</p>
            <p class="text-gray-400">Disponible</p>
          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="mt-2 font-medium text-lg ml-1">Usuarios</h1>
        <div
          v-for="item in chats.userChats"
          @click="changeChanel(item.idUser, item.name)"
          :key="item.idUser"
          class="flex px-1 p-1 items-center my-2 dark:bg-slate-500 bg-slate-300 rounded-lg hover:bg-black cursor-pointer"
        >
          <div class="text-[.8rem] relative w-full">
            <p class="w-3 h-3 bg-red-500 absolute right-0 rounded-full"></p>
            <p class="dark:text-white text-teal-700">{{ item.name }}</p>
            <p class="text-green-500 font-medium">Disponible</p>
          </div>
        </div>
      </div>
    </div>

    <div class="" :class="user.rol != 'soporte' ? 'w-2/3' : 'w-11/12'">
      <h1 class="text-center font-medium text-lg">Reportar Algun Inconveniente</h1>
      <div>
        <div class="flex px-4 items-center">
          <img
            class="w-12 h-12 rounded-full mr-1"
            src="https://img.freepik.com/vector-gratis/centro-llamadas_24877-49036.jpg?w=740&t=st=1698362881~exp=1698363481~hmac=0db56f31d94066272e05d45dfcc4b4d5e359e9f34414edbba27f30fe017363bb"
            alt="avatar"
          />
          <div class="text-[.7rem]">
            <p v-if="user.rol != 'soporte'">{{ nameUser }}</p>
            <p v-else>{{ user.name }}</p>
            <p class="text-gray-400">Disponible</p>
          </div>
        </div>
        <div class="h-96 contenedor w-full overflow-y-auto mb-2" ref="messageContainer">
          <div v-if="nameUser != 'Selecione Un Canal'">
            <div v-for="message in chats.userMessage" :key="message.time">
              <div
                v-if="message.name != user.name + ' ' + user.lastName"
                class="w-full flex justify-end py-0.5"
              >
                <div class="bg-blue-800 text-white p-1.5 rounded-s-xl rounded-t-xl">
                  <p>{{ message.message }}</p>
                  <p class="text-slate-400 text-xs">{{ message.time }}</p>
                </div>
              </div>

              <div v-else class="w-full flex py-0.5">
                <div class="bg-purple-800 text-white p-1.5 rounded-xl">
                  <p>{{ message.message }}</p>
                  <p class="text-slate-400 text-xs">{{ message.time }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="h-full flex items-center justify-center">
            <h1 class="text-2xl font-semibold text-gray-400 dark:text-gray-300">
              Selecione Un Canal
            </h1>
          </div>
        </div>

        <div class="flex items-center">
          <label for="dropzone-file">
            <font-awesome-icon icon="image" class="text-xl text-slate-500 mr-2" />
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
          <div class="flex w-full border rounded-lg">
            <input
              v-model="message"
              type="text"
              :disabled="nameUser == 'Selecione Un Canal' ? true : false"
              class="bg-transparent w-full h-8 outline-none"
              @keydown.enter="handleSubmit"
            />
            <button 
              @click="handleSubmit" 
              class="mx-2"
            >
              <font-awesome-icon icon="paper-plane" class="text-green-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChatsStore } from '@/stores/chats'
import { useStreamingAuthStore } from '@/stores/auth'
import { ref, onMounted, onUpdated } from 'vue'
import type { Profile } from '@/types/index'
const chats = useChatsStore()
const auth = useStreamingAuthStore()

const message = ref<string>('')
const nameUser = ref<string>('Selecione Un Canal')
const user = ref<Profile>(JSON.parse(sessionStorage.getItem('profile') as string) as Profile)
const channel = ref<string>('')
const messageContainer = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

onUpdated(() => {
  scrollToBottom()
})

onMounted(() => {
  scrollToBottom()
  auth.getAllSupportsUser()
  chats.getChannelUser(user.value.idUser)
})

const changeChanel = (id: string, name: string) => {
  channel.value = id
  nameUser.value = name
  if (user.value.rol == 'soporte') {
    chats.getMessages(id, user.value.idUser)
  } else {
    chats.getMessages(user.value.idUser, id)
  }
}

const handleSubmit = () => {
  const hours = new Date()
  if (user.value.rol == 'soporte') {
    chats.addMessage(
      {
        name: user.value.name + ' ' + user.value.lastName,
        message: message.value,
        time: hours.getHours() + ':' + hours.getMinutes() + ':' + hours.getSeconds()
      },
      channel.value,
      user.value.idUser
    )
  } else {
    chats.addMessage(
      {
        name: user.value.name + ' ' + user.value.lastName,
        message: message.value,
        time: hours.getHours() + ':' + hours.getMinutes() + ':' + hours.getSeconds()
      },
      user.value.idUser,
      channel.value
    )
  }
  message.value = ''
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  background-color: transparent; 
}
::-webkit-scrollbar-thumb {
  background-color: #515050;
  border-radius: 6px; 
}
::-webkit-scrollbar-track {
  background-color: transparent;
}

</style>
