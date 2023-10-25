<template>
  <div class="p-2 rounded-lg" :class="alert.type">
    <h1 class="text-lg">{{ alert.title }}</h1>
    <div class="flex gap-2 items-center mt-2">
      <font-awesome-icon class="text-3xl text-yellow-300" :icon="alert.icon" />
      <p>{{ alert.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Alert } from '@/types'
import { useStreamingStore } from '@/stores/streaming'
import { onMounted } from 'vue'

const state = useStreamingStore()

onMounted(() =>
  setTimeout(() => {
    state.alert.show = false
  }, 3000)
)

const alert = defineProps<Alert>()
</script>
