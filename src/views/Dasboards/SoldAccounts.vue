<template>
  <div class="dark:bg-gray-700 dark:text-white w-full" :class="state.dark">
    <div class="h-2 dark:bg-gray-700 dark:text-white"></div>
    <h1 class="text-center text-3xl font-medium dark:bg-gray-700 dark:text-white">
      Cuentas Vendidas
    </h1>
    <div class="py-2 flex flex-col items-center w-full dark:bg-gray-700 dark:text-white">
      <div class="w-full pl-3 dark:bg-gray-700 dark:text-white flex">
        <div class="border w-1/4 rounded-lg pr-2 dark:bg-gray-700 dark:text-white">
          <input class="h-8 w-11/12 outline-none bg-transparent" type="text" placeholder="Search" />
          <button class="">
            <font-awesome-icon class="text-gray-500" icon="magnifying-glass" />
          </button>
        </div>

        <div class="w-full flex justify-end pr-10 gap-1">
          <div v-for="value in accounts.btnPagination" :key="value">
            <button
              class="border p-1 rounded-md border-gray-400 text-gray-700"
              @click="pagination = value - 1"
            >
              {{ value }}0
            </button>
          </div>
          <button
            class="border p-1 rounded-md border-gray-400 text-gray-700"
            @click="pagination = 999"
          >
            All...
          </button>
        </div>
      </div>

      <div
        class="flex w-full justify-center mt-4 p-4 dark:bg-gray-700 dark:text-white h-[40rem] overflow-x-hidden overflow-scroll"
      >
        <table class="table-column-group w-full">
          <thead class="w-full">
            <tr class="border-b border-blue-900 dark:border-white h-10">
              <th class="w-1/12">Titulo</th>
              <th class="w-1/12">Cliente De La Cuenta</th>
              <th class="w-1/12">Correo De La Cuenta</th>
              <th class="w-1/12">Clave De La Cuenta</th>
              <th class="w-1/12">Pin Perfil</th>
              <th class="w-1/12">Fecha Inicia</th>
              <th class="w-1/12">Fecha Finaliza</th>
              <!-- <th>Nombre Del Vendedor</th> -->
              <th class="w-1/12">Estado De La Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="value in accounts.getAllAccountByUser(idUser, pagination)"
              :key="value.IdUser"
              class="border-b border-blue-900 dark:border-white text-center h-16"
            >
              <td>{{ value.title }}</td>
              <td>{{ value.cliente }}</td>
              <td>{{ value.correo }}</td>
              <td>{{ value.clave }}</td>
              <td>{{ value.pinPerfil }}</td>
              <td>{{ value.fechaInicial }}</td>
              <td>{{ value.fechaFinaliza }}</td>
              <td>
                <p v-if="value.state == 'Sin Gestionar'">
                  <button class="border border-red-600 text-red-600 p-1 my-1 rounded-lg">
                    Sin Gestionada
                  </button>
                </p>
                <p v-if="value.state == 'En Proceso'">
                  <button class="border border-yellow-500 text-yellow-500 p-1 my-1 rounded-lg">
                    En Proceso
                  </button>
                </p>
                <p v-if="value.state == 'Gestionada'">
                  <button class="border border-green-600 text-green-600 p-1 my-1 rounded-lg">
                    Gestionada
                  </button>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSalesAccountsStore } from '@/stores/salesAcconts'
import { useStreamingStore } from '@/stores/streaming'
import type { Profile } from '@/types'
import { onMounted, ref } from 'vue'
const state = useStreamingStore()
const accounts = useSalesAccountsStore()
const idUser = ref('')
const pagination = ref<number>(0)

onMounted(() => {
  if (sessionStorage.getItem('profile')) {
    accounts.getAllAccountUser()
    const profile: Profile = JSON.parse(sessionStorage.getItem('profile') as string)
    idUser.value = profile.idUser
  }
})
</script>
