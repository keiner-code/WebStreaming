<script setup lang="ts">
import { ref } from 'vue'
import { useStreamingStore } from '../../stores/streaming'

const imageEdit = ref('')
const titleEdit = ref('')
const providerEdit = ref('')
const descriptionEdit = ref('')
const durationEdit = ref('')
const renewalEdit = ref()
const priceEdit = ref()
const idSearch = ref('')

const image = ref('')
const title = ref('')
const provider = ref('')
const description = ref('')
const duration = ref('')
const renewal = ref()
const price = ref()
const id = ref('')
const idEdit = ref('')
const store = useStreamingStore()

const handlerCreate = async () => {
  const response = await store.create({
    image: image.value,
    title: title.value,
    provider: provider.value,
    description: description.value,
    duration: duration.value,
    renewal: renewal.value,
    price: price.value
  })
  if (response) {
    image.value = ''
    title.value = ''
    provider.value = ''
    description.value = ''
    duration.value = ''
    renewal.value = ''
    price.value = ''
  }
}

const handlerDelete = () => {
  store.deleteTally(id.value)
  id.value = ''
}

const handlerSearch = () => {
  if (idEdit.value) {
    const data = store.getByIdTally(idEdit.value)
    if (data) {
      imageEdit.value = data.image
      titleEdit.value = data.title
      providerEdit.value = data.provider
      descriptionEdit.value = data.description
      durationEdit.value = data.duration
      renewalEdit.value = data.renewal
      priceEdit.value = data.price
      idSearch.value = data.id
    } else {
      store.alert = {
        title: 'Id Invalido',
        type: 'bg-red-500',
        body: 'Por favor ingrese un ID valido',
        icon: 'face-sad-tear',
        show: true
      }
    }
  } else {
    store.alert = {
      title: 'Buscador Sin Datos',
      type: 'bg-yellow-500',
      body: 'Por favor ingrese un ID en el input',
      icon: 'face-frown',
      show: true
    }
  }
}

const clearInput = () => {
  imageEdit.value = ''
  titleEdit.value = ''
  providerEdit.value = ''
  descriptionEdit.value = ''
  durationEdit.value = ''
  renewalEdit.value = ''
  priceEdit.value = ''
  idSearch.value = ''
}

const handlerEdit = async () => {
  if (idEdit.value) {
    const data = {
      image: imageEdit.value,
      title: titleEdit.value,
      provider: providerEdit.value,
      description: descriptionEdit.value,
      duration: durationEdit.value,
      renewal: renewalEdit.value,
      price: priceEdit.value
    }
    await store.editTally(data, idSearch.value)
    clearInput()
    store.alert = {
      title: 'Cuenta Actualizada',
      type: 'bg-green-500',
      body: 'La cuenta ha sido actualizada correctamente',
      icon: 'face-smile',
      show: true
    }
  } else {
    store.alert = {
      title: 'Cuenta No Actualizada',
      type: 'bg-red-500',
      body: 'Primero debe buscar el id para mostrarle los datos a actualizar',
      icon: 'face-frown',
      show: true
    }
    clearInput()
  }
}
</script>

<template>
  <div class="w-full flex justify-between px-4 gap-4">
    <div class="flex items-center flex-col gap-4 w-1/2">
      <h1 class="text-3xl font-medium">Crear El Producto</h1>

      <div class="pl-2 w-full flex">
        <h1 class="pt-1 text-xl font-medium">Eliminar Cuenta</h1>
        <div class="mt-1 flex pl-2 w-2/3">
          <input
            v-model="id"
            class="border rounded-lg mr-2 w-2/3 h-8 outline-none"
            type="text"
            placeholder="Ingrese el id"
          />
          <button @click="handlerDelete()" class="bg-red-500 text-white px-1 rounded-lg">
            Eliminar
          </button>
        </div>
      </div>

      <form
        @submit.prevent="handlerCreate"
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

    <div class="flex items-center flex-col gap-4 w-1/2">
      <h1 class="text-3xl font-medium">Editar La Cuenta</h1>

      <div class="border w-1/2 rounded-lg ml-4">
        <input
          v-model="idEdit"
          class="h-8 w-11/12 outline-none"
          type="text"
          placeholder="Ingresar Id"
        />
        <button @click="handlerSearch()" class="outline-none">
          <font-awesome-icon class="text-gray-500" icon="magnifying-glass" />
        </button>
      </div>

      <form
        @submit.prevent="handlerEdit"
        class="px-2 bg-gray-300 bg-opacity-40 rounded-lg shadow-xl w-full"
      >
        <input type="hidden" v-model="idSearch" />
        <div class="w-full my-2">
          <label htmlFor="name" class="text-gray-600">Nombre</label>
          <input
            name="title"
            v-model="titleEdit"
            type="text"
            class="w-full h-8 rounded-lg outline-none"
          />
        </div>

        <div class="w-full my-2">
          <label htmlFor="duration" class="text-gray-600">Duracion</label>
          <input
            name="duration"
            v-model="durationEdit"
            type="text"
            class="w-full h-8 rounded-lg outline-none"
          />
        </div>

        <div class="flex gap-2">
          <div class="w-full my-2">
            <label htmlFor="price" class="text-gray-600">Proveedor</label>
            <input
              name="provider"
              v-model="providerEdit"
              type="text"
              class="w-full h-8 rounded-lg outline-none"
            />
          </div>

          <div class="w-full my-2">
            <label htmlFor="price" class="text-gray-600">Precio</label>
            <input
              name="price"
              v-model="priceEdit"
              type="number"
              class="w-full h-8 rounded-lg outline-none"
            />
          </div>
        </div>

        <div class="w-full my-2">
          <label htmlFor="image" class="text-gray-600">Imagen</label>
          <textarea
            name="image"
            v-model="imageEdit"
            class="w-full h-16 rounded-lg outline-none"
          ></textarea>
        </div>

        <div class="w-full my-2">
          <label htmlFor="image" class="text-gray-600">Descripcion</label>
          <textarea
            name="description"
            v-model="descriptionEdit"
            class="w-full h-20 rounded-lg outline-none"
          ></textarea>
        </div>

        <div class="w-full my-2">
          <label htmlFor="renewal" class="text-gray-600">Tiene Renovacion La Cuenta:</label>
          <label class="ml-4" for=""
            >Si <input type="radio" value="true" name="renewal" v-model="renewalEdit"
          /></label>
          <label class="ml-4" for=""
            >No <input type="radio" value="false" name="renewal" v-model="renewalEdit"
          /></label>
        </div>

        <div class="w-full my-6 flex justify-center">
          <button class="border border-blue-500 p-2 rounded-lg text-blue-500">Editar</button>
        </div>
      </form>
    </div>
  </div>
</template>
