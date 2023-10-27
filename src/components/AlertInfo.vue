<template>
  <p class="text-lg text-gray-600 font-medium">!!Apreciado Visitante¡¡</p>
  <div class="text-gray-600 flex items-center gap-4">
    <font-awesome-icon icon="face-smile" class="text-5xl text-yellow-100 animate-bounce" />
    <p>
      debes registrarte para poder recargar y comprar una de nuestras cuentas, Si no deseas hacerlo
      pero quieres comprar una de nuestras cuentas solo presiona el icono de whatsApp
    </p>
  </div>
  <p class="text-gray-700 font-normal">¿Que Deseas Hacer?</p>
  <div class="w-full flex justify-center gap-4 my-4">
    <button
      @click="router.push('/session/register')"
      class="border border-blue-500 rounded-lg text-blue-500 px-2 py-1"
    >
      Registrarte
    </button>
    <button
      @click="router.push('')"
      class="border border-green-600 rounded-lg text-green-600 px-2 py-1"
    >
      Redirigir a whatsApp
    </button>
    <button
      @click="state.showInfo = !state.showInfo"
      class="border border-amber-600 rounded-lg text-amber-600 px-2 py-1"
    >
      Cancelar
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStreamingStore } from '@/stores/streaming'

const state = useStreamingStore()
const router = useRouter()
</script>
