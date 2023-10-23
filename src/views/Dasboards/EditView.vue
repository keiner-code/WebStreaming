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
const id = ref('')
const idSearch = ref('')
const store = useStreamingStore()

const clearInput = () => {
     image.value = '';
     title.value = '';
     provider.value = '';
     description.value = '';
     duration.value = '';
     renewal.value = '';
     price.value = '';
     idSearch.value = '';
}

const handlerSubmit = async () => {
  if(idSearch.value){
    const data = {
    image: image.value,
    title: title.value,
    provider: provider.value,
    description: description.value,
    duration: duration.value,
    renewal: renewal.value,
    price: price.value,
  }
  await store.editTally(data,idSearch.value);
  clearInput();
  store.alert = {
      title: 'Cuenta Actualizada',
      type: 'bg-green-500',
      body: 'La cuenta ha sido actualizada correctamente',
      icon: 'face-smile',
      show: true
  }
}else{
  store.alert = {
      title: 'Cuenta No Actualizada',
      type: 'bg-red-500',
      body: 'Primero debe buscar el id para mostrarle los datos a actualizar',
      icon: 'face-frown',
      show: true
    }
  clearInput();
}
}

const handlerSearch = () => {
  if(id.value){
    const data = store.getByIdTally(id.value);
    if(data){
      image.value = data.image
      title.value = data.title
      provider.value = data.provider
      description.value = data.description
      duration.value = data.duration
      renewal.value = data.renewal
      price.value = data.price
      idSearch.value = data.id
    }else{
      store.alert = {
      title: 'Id Invalido',
      type: 'bg-red-500',
      body: 'Por favor ingrese un ID valido',
      icon: 'face-sad-tear',
      show: true
    }
    }
  }else{
    store.alert = {
      title: 'Buscador Sin Datos',
      type: 'bg-yellow-500',
      body: 'Por favor ingrese un ID en el input',
      icon: 'face-frown',
      show: true
    }
  }
}
</script>

<template>
  <div class="w-full">
    <div class="border w-1/5 rounded-lg mt-4 ml-4">
        <input v-model="id" class="h-8 w-11/12 outline-none" type="text" placeholder="Ingresar Id" />
        <button @click="handlerSearch()" class="outline-none"><font-awesome-icon class="text-gray-500" icon="magnifying-glass" /></button>
      </div>

  <div class="w-full flex flex-col items-center">
    <h1 class="my-2 text-3xl font-medium">Editar La Cuenta</h1>

    <div class="flex items-center flex-col gap-4 w-1/2">
      <form
        @submit.prevent="handlerSubmit"
        class="px-2 bg-gray-300 bg-opacity-40 rounded-lg shadow-xl w-full"
      >
        <input type="hidden" v-model="idSearch">
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
          <button class="border border-blue-500 p-2 rounded-lg text-blue-500">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
