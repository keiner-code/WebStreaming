<script setup lang="ts">
import CardHomeVue from '../components/CardHomeVue.vue';
import HomeNavVue from '@/components/HomeNavVue.vue';
import { useStreamingStore } from '@/stores/streaming';

const state = useStreamingStore();

</script>

<template>
  <HomeNavVue />
  <div :class="state.dark" >

    <main class="flex justify-center dark:bg-gray-700 dark:text-white">
      
      <div class="w-10/12 float-left ">
        <h1 class="text-center py-10 text-5xl font-semibold">Streaming</h1>
        <CardHomeVue />
        <CardHomeVue />
        <CardHomeVue />
        <CardHomeVue />
        <CardHomeVue />
      </div>
    </main>
  </div>
</template>
