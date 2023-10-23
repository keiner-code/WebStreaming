<template>
  <div class="pl-2 w-full">
    <h1 class="pt-4 text-3xl font-medium">Eliminar Cuenta</h1>
  <div class="mt-4 w-full flex">
    <input v-model="id" class="border rounded-lg mr-2 w-1/4 h-8 outline-none" type="text" placeholder="Ingrese el id">
    <button @click="handlerDelete()" class="bg-red-500 text-white px-1 rounded-lg" >Eliminar</button>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming';
import { ref } from 'vue';

const id = ref('');
const store = useStreamingStore();

const handlerDelete = () => {
  store.deleteTally(id.value)
  id.value = '';
}
</script>