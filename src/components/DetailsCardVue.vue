<template>
  <div class="w-1/2 bg-slate-200 flex bg-opacity-10 rounded-lg shadow-lg">
    <img class="w-3/6 p-1 rounded-xl" src="https://img.freepik.com/foto-gratis/mano-sujetando-mando-encima-palomitas-entradas-cine_23-2147681375.jpg?w=740&t=st=1696990017~exp=1696990617~hmac=d88f04cca1467ed02e8027f305cfa95917938f23b353f82a1472bed1282ed7f7" alt="" >
    <div class="pl-2 pt-4 relative">
      <button class="absolute right-2 top-2" @click="store.changeShowDetail">X</button>
      <h1 class="text-lg">2 Pantallas de netflix</h1>
      <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in rerum aperiam quae omnis reiciendis quibusdam, officiis vitae impedit placeat neque minus </p>
      <p class="text-gray-600 mt-4">Duracion: <strong>30 dias</strong></p>
      <p class="text-gray-600 mt-4">Precio: <strong>$10.000</strong></p>
      <div class="w-full flex justify-center">
        <button class="text-center border border-blue-500 px-2 py-1 mt-4 rounded-lg text-blue-500">Obtener cuenta</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming';
const store = useStreamingStore();
</script>