<script setup lang="ts">
import AboutHomeVueVue from '@/components/AboutHomeVue.vue';
import CardHomeVue from '../components/CardHomeVue.vue'
import HomeNavVue from '@/components/HomeNavVue.vue'
import SuportHomeVue from '@/components/SuportHomeVue.vue';
import { useStreamingStore } from '@/stores/streaming'

const state = useStreamingStore()
</script>

<template>
  <div :class="state.dark">
    <div class="w-full dark:bg-gray-700 dark:text-white flex justify-center pt-14">
      <div class="w-10/12">
        <HomeNavVue />
      </div>
    </div>
    <main class="flex flex-col items-center dark:bg-gray-700 dark:text-white">
      <div class="w-10/12 my-14">
        <h1
          class="text-center pt-3 pb-4 text-5xl font-semibold border shadow-xl rounded-lg border-gray-300 dark:border-gray-500 w-full"
        >
          Streaming
        </h1>

        <div class="float-left mt-10 border-none">
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
        </div>
      </div>

      <div class="w-10/12 my-4">
        <h1
          class="text-center pt-3 pb-4 text-5xl font-semibold border shadow-xl rounded-lg border-gray-300 dark:border-gray-500 w-full"
        >
          Soporte
        </h1>
        <SuportHomeVue />
      </div>

      <div class="w-10/12 mt-20 md:my-4">
        <h1
          class="text-center pt-3 pb-4 text-5xl font-semibold border shadow-xl rounded-lg border-gray-300 dark:border-gray-500 w-full"
        >
          Acerca De Nosotros
        </h1>
        <AboutHomeVueVue />
      </div>
    </main>
  </div>
</template>
