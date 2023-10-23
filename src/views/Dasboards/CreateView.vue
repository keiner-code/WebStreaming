<script setup lang="ts">
import { ref } from 'vue'
import { useStreamingStore } from '../../stores/streaming'

const image = ref('')
const title = ref('')
const provider = ref('')
const description = ref('')
const duration = ref('')
const renewal = ref() //renovacion
const price = ref()
const store = useStreamingStore()

const handlerSubmit = async() => {
 const response = await store.create({
    image: image.value,
    title: title.value,
    provider: provider.value,
    description: description.value,
    duration: duration.value,
    renewal: renewal.value,
    price: price.value
  })
  if(response){
     image.value = '';
     title.value = '';
     provider.value = '';
     description.value = '';
     duration.value = '';
     renewal.value = ''
     price.value = '';
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <h1 class="my-4 text-5xl font-medium">Crear El Producto</h1>

    <div class="flex items-center flex-col gap-4 w-1/2">
      <form
        @submit.prevent="handlerSubmit"
        class="px-2 bg-gray-300 bg-opacity-40 rounded-lg shadow-xl w-full"
      >
        <div class="w-full my-2">
          <label htmlFor="name" class="text-gray-600">Nombre</label>
          <input
            name="title"
            v-model="title"
            type="text"
            class="w-full h-8 rounded-lg outline-none"
          />
        </div>

        <div class="w-full my-2">
          <label htmlFor="duration" class="text-gray-600">Duracion</label>
          <input
            name="duration"
            v-model="duration"
            type="text"
            class="w-full h-8 rounded-lg outline-none"
          />
        </div>

        <div class="flex gap-2">
          <div class="w-full my-2">
            <label htmlFor="price" class="text-gray-600">Proveedor</label>
            <input
              name="provider"
              v-model="provider"
              type="text"
              class="w-full h-8 rounded-lg outline-none"
            />
          </div>

          <div class="w-full my-2">
            <label htmlFor="price" class="text-gray-600">Precio</label>
            <input
              name="price"
              v-model="price"
              type="number"
              class="w-full h-8 rounded-lg outline-none"
            />
          </div>
        </div>

        <div class="w-full my-2">
          <label htmlFor="image" class="text-gray-600">Imagen</label>
          <textarea
            name="image"
            v-model="image"
            class="w-full h-16 rounded-lg outline-none"
          ></textarea>
        </div>

        <div class="w-full my-2">
          <label htmlFor="image" class="text-gray-600">Descripcion</label>
          <textarea
            name="description"
            v-model="description"
            class="w-full h-20 rounded-lg outline-none"
          ></textarea>
        </div>

        <div class="w-full my-2">
          <label htmlFor="renewal" class="text-gray-600">Tiene Renovacion La Cuenta:</label>
          <label class="ml-4" for=""
            >Si <input type="radio" value="true" name="renewal" v-model="renewal"
          /></label>
          <label class="ml-4" for=""
            >No <input type="radio" value="false" name="renewal" v-model="renewal"
          /></label>
        </div>

        <div class="w-full my-6 flex justify-center">
          <button class="border border-green-500 p-2 rounded-lg text-green-500">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>
