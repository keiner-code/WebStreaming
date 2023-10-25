<template>
  <div class="dark:bg-gray-700 dark:text-white" :class="state.dark">
  <div class="h-20 dark:bg-gray-700 dark:text-white"></div>
  <h1 class="text-center text-3xl font-medium dark:bg-gray-700 dark:text-white">Cuentas Del Usuario</h1>
  <div class="py-10 flex flex-col items-center w-full dark:bg-gray-700 dark:text-white">
    <div class="w-full pl-3 dark:bg-gray-700 dark:text-white">
      <div class="border w-1/5 rounded-lg pr-2 dark:bg-gray-700 dark:text-white">
        <input class="h-8 w-11/12 outline-none bg-transparent" type="text" placeholder="Search" />
        <button class=""><font-awesome-icon class="text-gray-500" icon="magnifying-glass" /></button>
      </div>
    </div>

    <div class="flex w-full justify-center mt-4 p-4 dark:bg-gray-700 dark:text-white">
      <table class="table-column-group">
        <thead>
          <tr class="border-b border-blue-900 dark:border-white">
            <th>Cuenta</th>
            <th>Cliente</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Pin Perfil</th>
            <th>Fecha Inicia</th>
            <th>Fecha Finaliza</th>
            <th>⚠NOTA</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in accounts.getAllAccountByUser(idUser,1)" :key="value.IdUser" class="border-b border-blue-900 dark:border-white text-center">
            <td>{{ value.title }}</td>
            <td>{{ value.cliente }}</td>
            <td>{{ value.correo }}</td>
            <td>{{value.clave}}</td>
            <td>{{value.pinPerfil}}</td>
            <td>{{value.fechaInicial}}</td>
            <td>{{ value.fechaFinaliza }}</td>
            <td class="w-1/6">{{ value.nota }}</td>
            <td>
              <p><button class="border border-green-600 text-green-600 p-1 my-1 rounded-lg" >Enviar A WhatsApp</button></p>
              <p><button class="border border-yellow-500 text-yellow-500 p-1 my-1 rounded-lg" >Reportar Problema</button></p>
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