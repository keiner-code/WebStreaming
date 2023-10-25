<template>
  <div
    class="w-3/4 md:w-1/2 bg-slate-200 flex flex-col md:flex-row bg-opacity-40 rounded-lg shadow-lg p-2"
  >
    <img class="w-full md:w-3/6 p-1 rounded-xl" :src="store.detailsAccount.image" alt="" />
    <div class="pl-2 pt-4 relative">
      <button class="absolute right-2 top-2" @click="store.changeShowDetail">X</button>
      <h1 class="text-lg">{{ store.detailsAccount.title }}</h1>
      <p class="text-gray-200">{{ store.detailsAccount.description }}</p>
      <p class="text-gray-200 mt-1">
        Duracion: <strong>{{ store.detailsAccount.duration }}</strong>
      </p>
      <p class="text-gray-200 mt-1">
        Precio: <strong>{{ store.detailsAccount.price }}</strong>
      </p>
      <p class="text-gray-200 mt-1">
        Renovable: <strong>{{ store.detailsAccount.renewal ? 'No' : 'Si' }}</strong>
      </p>
      <div class="w-full flex justify-center">
        <button class="text-center border border-blue-500 px-2 py-1 mt-4 rounded-lg text-blue-500">
          Obtener cuenta
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming'
const store = useStreamingStore()
</script>
