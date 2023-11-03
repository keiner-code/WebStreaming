<template>
  <div class="h-16"></div>
  <div class="flex" :class="store.dark">
    <div class="w-2/5 dark:bg-gray-700 dark:text-white">
    <SupportInfoVue />
    </div>

    <div class="w-3/5 px-4 dark:bg-gray-700 dark:text-white">
      <ChatVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming';
import ChatVue from '@/components/ChatVue.vue';
import  SupportInfoVue from '@/components/SupportInfoVue.vue'

const store = useStreamingStore();
</script>

<style scoped>
</style>
