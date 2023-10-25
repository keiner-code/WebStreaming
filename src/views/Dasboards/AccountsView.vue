<template>
  <div class="my-10 flex flex-col items-center w-full">
    <div class="w-full pl-3">
      <div class="border w-1/5 rounded-lg pr-2">
        <input
          class="h-8 w-11/12 outline-none"
          v-model="titleSearch"
          type="text"
          placeholder="Search"
        />
        <button class="">
          <font-awesome-icon class="text-gray-500" icon="magnifying-glass" />
        </button>
      </div>
    </div>

    <div class="flex w-full justify-center mt-4 p-4">
      <table class="table-column-group">
        <thead>
          <tr class="border-b border-blue-900">
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Provider</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Renewal</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in state.searchTallyByTitle(titleSearch)"
            :key="item.id"
            class="border-b border-blue-900 text-center"
          >
            <td>{{ item.id }}</td>
            <td class="w-1/6"><img class="w-full" :src="item.image" alt="img-streaming" /></td>
            <td>{{ item.title }}</td>
            <td>{{ item.provider }}</td>
            <td class="w-1/6">{{ item.description }}</td>
            <td>{{ item.duration }}</td>
            <td>{{ item.renewal }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStreamingStore } from '@/stores/streaming'

const titleSearch = ref('')
const state = useStreamingStore()

onMounted(() => {
  state.getAllTally()
})
</script>
