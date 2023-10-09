<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
</script>

<template>
  <div class="fixed w-full z-10">
    <HeaderVue />
  </div>
  <RouterView />
  <FooterVue />
</template>

<style scoped></style>
