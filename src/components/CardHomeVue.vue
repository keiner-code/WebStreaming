<template>
  <div class="transform duration-500 ease-in-out hover:scale-105 m-6 w-64 border dark:border-gray-600 dark:shadow-lg rounded-lg shadow-xl float-left" :class="state.dark">
    <div class="relative dark:bg-gray-700 dark:text-white">
      <img
        class="rounded-t-xl"
        :src="account.tally.image"
        alt="carImg"
      />
      <font-awesome-icon icon="circle-check" class="absolute top-0 right-0 pr-2 pt-2 text-xl text-green-400" />
    </div>
    <div class="pl-2 dark:bg-gray-700 dark:text-white">
      <p class="text-xl font-medium">{{ account.tally.title }}</p>
      <h1>{{ account.tally.provider }}</h1>
      <p class="text-gray-500 text-start">{{ account.tally.description }}</p>
      <span class="flex justify-between text-lg">
        <div class="flex"><strong>Precio:</strong> 
        <p class="ml-4">$ {{ account.tally.price }}</p></div>
        <button @click="state.changeShowDetail(account.tally)" class="text-xl mr-2 text-yellow-500 dark:text-yellow-400"><font-awesome-icon icon="circle-info" /></button>
      </span>
      <div class="flex justify-center">
        <button class="border p-2 my-2 rounded-md ">Comprar</button>
      </div>
    </div>
  </div>
  <div v-show="state.showdetails" class="fixed w-full top-1/4 left-12 md:left-1/4 md:right-1/2">
    <DetailsCardVue />
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming';
import DetailsCardVue from './DetailsCardVue.vue';
import type { Streaming } from '@/types';

type DataProps = {
  tally: Streaming
}

const account = defineProps<DataProps>()

const state = useStreamingStore();
</script>
