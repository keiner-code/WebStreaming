<template>
  <div class="h-12"></div>
  <div :class="state.dark">
    <HeaderStreamVue />
    <main class="flex flex-col items-center dark:bg-gray-700 dark:text-white">
      <div class="w-10/12 my-14">
        <h1
          class="text-center pt-3 pb-4 text-5xl font-semibold border shadow-xl rounded-lg border-gray-300 dark:border-gray-500 w-full"
        >
          Streaming
        </h1>
        <div class="w-full flex justify-center md:justify-end mt-10 items-center mb-3 md:mb-0">
          <input
            type="text"
            class="border w-2/3 md:w-1/5 outline-none bg-transparent rounded-lg h-7 absolute"
            placeholder="Ingrese el titulo"
            v-model="titleAccount"
          />
          <font-awesome-icon icon="magnifying-glass" class="relative left-28 md:right-2 md:left-0" />
        </div>
        <div>
          Dinero : <strong>{{ profile?.money ? formatter.format(profile?.money as number): '0 $' }}</strong>
        </div>
        <div
          v-for="item in state.searchTallyByTitle(titleAccount)"
          :key="item.id"
          class="float-left mt-10 border-none"
        >
          <CardHomeVue :tally="item" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import CardHomeVue from '@/components/CardHomeVue.vue'
import HeaderStreamVue from '@/components/HeaderStreamVue.vue'
import { useStreamingStore } from '@/stores/streaming'
import { onMounted, ref } from 'vue'
import type { Profile } from '@/types/index'

const titleAccount = ref('')
const state = useStreamingStore()
const profile = ref<Profile>()

onMounted(() => {
  state.getAllTally()
  profile.value = JSON.parse(sessionStorage.getItem('profile') as string)
})

const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP'
})
</script>
