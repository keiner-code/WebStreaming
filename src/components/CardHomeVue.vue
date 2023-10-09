<template>
  <div class="transform duration-500 ease-in-out hover:scale-105 m-4 w-64 border dark:border-gray-600 dark:shadow-lg rounded-lg shadow-xl float-left" :class="state.dark">
    <div class="relative dark:bg-gray-700 dark:text-white">
      <img
      class="rounded-t-xl"
        src="https://img.freepik.com/vector-premium/logotipo-netflix-diseno-vector-maqueta-telefono-inteligente-fondo-blanco-apto-web-icono-aplicaciones-moviles_771881-297.jpg?w=1480"
        alt="carImg"
      />
      <font-awesome-icon icon="circle-check" class="absolute top-0 right-0 pr-2 pt-2 text-xl text-green-400" />
    </div>
    <div class="pl-2 dark:bg-gray-700 dark:text-white">
      <p class="text-xl font-medium">2 Pantallas Netfilx</p>
      <h1>Netflix</h1>
      <p class="text-gray-500 text-start">
        este paquete contiene dos pantallas de Netfilx valido por 30 dias a la compra valido por 30 dias a la compra
      </p>
      <span class="flex text-lg"><strong>Precio:</strong> <p class="ml-4">$10.000</p> </span>
      <div class="flex justify-center">
        <button class="border p-2 my-2 rounded-md ">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming';

const state = useStreamingStore();
</script>
