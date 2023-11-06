<template>
  <div class="dark:bg-gray-700 dark:text-white" :class="state.dark">
  <div class="h-20 dark:bg-gray-700 dark:text-white"></div>
  <h1 class="text-center text-3xl font-medium dark:bg-gray-700 dark:text-white">Cuentas Del Usuario</h1>
  <div class="py-10 flex flex-col items-center w-full dark:bg-gray-700 dark:text-white">
    <div class="w-full pl-3 dark:bg-gray-700 dark:text-white">
      <div class="border md:w-1/5 mr-4 rounded-lg md:pr-2 dark:bg-gray-700 dark:text-white">
        <input class="h-8 w-11/12 outline-none bg-transparent" type="text" placeholder="Search" />
        <button class=""><font-awesome-icon class="text-gray-500" icon="magnifying-glass" /></button>
      </div>
    </div>

    <div class="flex w-full overflow-scroll md:justify-center mt-4 p-4 dark:bg-gray-700 dark:text-white">
      <table class="table-column-group">
        <thead>
          <tr class="border-b border-blue-900 dark:border-white">
            <th class="md:px-4 px-1" >Cuenta</th>
            <th class="md:px-4 px-1" >Cliente</th>
            <th class="md:px-4 px-1" >Usuario</th>
            <th class="md:px-4 px-1" >Clave</th>
            <th class="md:px-4 px-1" >Pin Perfil</th>
            <th class="md:px-4 px-1" >Fecha Inicia</th>
            <th class="md:px-4 px-1" >Fecha Finaliza</th>
            <th class="md:px-4 px-1" >⚠NOTA</th>
            <th class="md:px-4 px-1" >Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in accounts.getAllAccountByUser(idUser,1)" :key="value.IdUser" class="border-b border-blue-900 dark:border-white text-center">
            <td class="border md:border-none">{{ value.title }}</td>
            <td class="border md:border-none">{{ value.cliente }}</td>
            <td class="border md:border-none">{{ value.correo }}</td>
            <td class="border md:border-none">{{value.clave}}</td>
            <td class="border md:border-none">{{value.pinPerfil}}</td>
            <td class="border md:border-none">{{value.fechaInicial}}</td>
            <td class="border md:border-none">{{ value.fechaFinaliza }}</td>
            <td class="border md:border-none">{{ value.nota }}</td>
            <td class="border md:border-none">
              <p><button class="md:border md:border-green-600 text-green-600 md:p-1 my-1 rounded-lg" >Enviar A WhatsApp</button></p>
              <p><button class="md:border md:border-yellow-500 text-yellow-500 md:p-1 md:my-1 rounded-lg" >Reportar Problema</button></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useSalesAccountsStore } from '@/stores/salesAcconts';
import { useStreamingStore } from '@/stores/streaming';
import type { Profile } from '@/types';
import { onMounted, ref } from 'vue';
const state = useStreamingStore();
const accounts = useSalesAccountsStore();
const idUser = ref('');

onMounted(()=>{
  if(sessionStorage.getItem('profile')){
    accounts.getAllAccountUser();
    const profile: Profile = JSON.parse(sessionStorage.getItem('profile') as string);
    idUser.value = profile.idUser
  }
})
</script>