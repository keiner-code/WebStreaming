<template>
  <div class="flex" :class="state.dark">
    <div class="w-1/2  flex flex-col justify-center items-center dark:bg-gray-700 dark:text-white">
      <h1 class="text-center text-5xl mb-4 font-medium">Landing Page</h1>
      <p class="text-start w-4/5 text-[1.1rem] font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditate
        ipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim quia
        officiis quasi quod impedit id cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditate
        ipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim quia
        officiis quasi quod impedit id cum?
      </p>
      <div class="w-4/5 mt-6">
        <button class="border text-start p-2 rounded-2xl">Read More</button>
      </div>
    </div>

    <div class="w-1/2 flex flex-col justify-center items-center dark:bg-gray-700 dark:text-white">
      <div class="h-28"></div>
      <div class="w-1/2  flex">
        <img class="rounded-lg" src="https://img.freepik.com/vector-gratis/envase-cosmetico-realista_1268-1266.jpg?w=740&t=st=1696715345~exp=1696715945~hmac=2deebd61895076057de8637762ecbe5b723ab39ad0a03bfd5856866beb426140" alt="img-nav">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming';
const state = useStreamingStore();
</script>

<style scoped>
</style>