<template>
  <div
    class="transform duration-500 ease-in-out hover:scale-105 m-6 w-64 border dark:border-gray-600 dark:shadow-lg rounded-lg shadow-xl float-left"
    :class="state.dark"
  >
    <div class="relative dark:bg-gray-700 dark:text-white">
      <img class="rounded-t-xl" :src="account.tally.image" alt="carImg" />
      <font-awesome-icon
        icon="circle-check"
        class="absolute top-0 right-0 pr-2 pt-2 text-xl text-green-400"
      />
    </div>
    <div class="pl-2 dark:bg-gray-700 dark:text-white">
      <p class="text-xl font-medium">{{ account.tally.title }}</p>
      <h1>{{ account.tally.provider }}</h1>
      <p class="text-gray-500 text-start">{{ account.tally.description }}</p>
      <span class="flex justify-between text-lg">
        <div class="flex">
          <strong>Precio:</strong>
          <p class="ml-4">{{ formatter.format(account.tally.price) }}</p>
        </div>
        <button
          @click="state.changeShowDetail(account.tally)"
          class="text-xl mr-2 text-yellow-500 dark:text-yellow-400"
        >
          <font-awesome-icon icon="circle-info" />
        </button>
      </span>
      <div v-if="account.tally.price <= money" class="flex justify-center">
        <button
          @click="showConfirm = !showConfirm"
          class="border border-blue-400 text-blue-400 p-2 my-2 rounded-md"
        >
          Comprar
        </button>
      </div>
      <div v-else class="flex justify-center">
        <button class="border border-green-400 text-green-400 p-2 my-2 rounded-md">
          Recargar Dinero
        </button>
      </div>
    </div>
  </div>
  <div v-show="state.showdetails" class="fixed w-full top-1/4 left-12 md:left-1/4 md:right-1/2">
    <DetailsCardVue />
  </div>

  <div v-show="showConfirm" class="fixed top-1/2 left-1/3 text-center md:w-1/2">
    <div class="bg-gray-400 shadow-2xl rounded-lg py-2 w-2/3 text-white">
      <p class="text-lg font-medium">¿Esta seguro(a) que desea comprar esta cuenta?</p>
      <p>Si es asi por favor ingrese el nombre de quien usara la cuenta</p>
      <div class="w-full flex pl-2 pt-2">
        <input
          type="text"
          v-model="cliente"
          class="bg-transparent border placeholder-white w-1/2 rounded-md outline-none"
          placeholder="Nombre del cliente"
        />
      </div>
      <div class="flex md:block md:text-end md:mr-4 md:mt-4">
        <button @click="showConfirm = !showConfirm" class="bg-red-400 ml-2 md:ml-6 p-1 rounded-lg">
          Cancelar
        </button>
        <button
          class="bg-green-400 ml-3 md:ml-6 p-1 rounded-lg"
          @click="handlerSell(account.tally.title, cliente, account.tally.price)"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming'
import { useSalesAccountsStore } from '@/stores/salesAcconts'
import DetailsCardVue from './DetailsCardVue.vue'
import type { Streaming, createSaleAccountDto, Profile } from '@/types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

type DataProps = {
  tally: Streaming
}

const account = defineProps<DataProps>()

const state = useStreamingStore()
const sold = useSalesAccountsStore()
const router = useRouter()

const showConfirm = ref(false)
const cliente = ref('')
const money = ref(0)

onMounted(() => {
  if (sessionStorage.getItem('profile')) {
    const user: Profile = JSON.parse(sessionStorage.getItem('profile') as string)
    money.value = user.money
  }
})

const handlerSell = (title: string, cliente: string, price: number) => {
  if (sessionStorage.getItem('profile')) {
    const user: Profile = JSON.parse(sessionStorage.getItem('profile') as string)
    const soldAccounts: createSaleAccountDto = {
      title,
      cliente,
      correo: 'en proceso',
      clave: 'en proceso',
      pinPerfil: 'en proceso',
      fechaInicial: 'en proceso',
      fechaFinaliza: 'en proceso',
      nota: 'PROHIBIDO🚫 ELIMINAR ❌LOS PERFILES DE LAS DEMAS PERSONAS 👤- PROHIBIDO🚫 CAMBIAR CLAVES 🔒',
      IdUser: user.id,
      nameUser: user.name,
      price,
      state: 'Sin Gestionar'
    }
    sold
      .create(soldAccounts)
      .then(() => {
        state.alert = {
          title: 'Compra Realizada',
          type: 'bg-green-500',
          body: 'Por favor espere unos minutos mientras activamos su cuenta',
          icon: 'face-smile',
          show: true
        }
        router.push('/accounts')
      })
      .catch((error) => {
        state.alert = {
          title: 'Compra No Realizada',
          type: 'bg-red-500',
          body: `Compra No Realizada ${error}`,
          icon: 'face-sad-tear',
          show: true
        }
      })
  }
}

const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP'
})
</script>
