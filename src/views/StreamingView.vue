

<template>
<div class="h-16"></div>
<div :class="state.dark">
  <HeaderStreamVue />
  <main class="flex flex-col items-center dark:bg-gray-700 dark:text-white">
      <div class="w-10/12 my-14">
        <h1
          class="text-center pt-3 pb-4 text-5xl font-semibold border shadow-xl rounded-lg border-gray-300 dark:border-gray-500 w-full"
        >
          Streaming
        </h1>
        <SearchVue/>
        <div class="float-left mt-10 border-none">
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
          <CardHomeVue />
        </div>
      </div>
  </main>
</div>
</template>

<script setup lang="ts">
import CardHomeVue from '@/components/CardHomeVue.vue';
import HeaderStreamVue from '@/components/HeaderStreamVue.vue';
import { useStreamingStore } from '@/stores/streaming';
import SearchVue from '@/components/SearchVue.vue'

const state = useStreamingStore();
</script>