<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
import DashSidebard from './components/DashSidebardVue.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import AlertVue from '@/components/AlertVue.vue'
import { useStreamingStore } from './stores/streaming'

const route = useRoute()
const dashboard = computed(() => route.fullPath.includes('dashboard'))
const session = computed(() => route.fullPath.includes('session'))
const state = useStreamingStore()
</script>

<template>
  <div v-if="!dashboard && !session" class="fixed w-full z-10">
    <HeaderVue />
  </div>
  <div v-else>
    <div v-if="!session" class="flex w-full">
      <DashSidebard />
      <RouterView />
    </div>
    <div v-else>
      <RouterView />
    </div>
  </div>

  <div v-if="state.alert.show" class="fixed top-0 right-0 text-white z-10 mr-6 mt-6">
    <AlertVue
      :title="state.alert.title"
      :type="state.alert.type"
      :body="state.alert.body"
      :icon="state.alert.icon"
      :show="state.alert.show"
    />
  </div>

  <RouterView v-if="!dashboard && !session" />
  <FooterVue v-if="!dashboard && !session" />
</template>

<style scoped></style>
