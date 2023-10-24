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
            <th>Imagen</th>
            <th>Cliente</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Pin Perfil</th>
            <th>Inicia</th>
            <th>Finaliza</th>
            <th>Nota</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr  class="border-b border-blue-900 dark:border-white text-center">
            <td class="w-1/6 py-1"><img class="w-full" src="https://img.freepik.com/vector-premium/logotipo-netflix-diseno-vector-maqueta-telefono-inteligente-fondo-blanco-apto-web-icono-aplicaciones-moviles_771881-297.jpg?w=1480" alt="img-streaming"></td>
            <td>Angie</td>
            <td>tcplus01@netplexcaribe.com</td>
            <td>plus20300*</td>
            <td>1986</td>
            <td>20/10/2023</td>
            <td>19/11/2023</td>
            <td class="w-1/6">⚠ NOTA: PROHIBIDO🚫 ELIMINAR ❌LOS PERFILES DE LAS DEMAS PERSONAS 👤- PROHIBIDO🚫 CAMBIAR CLAVES 🔒</td>
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
import { useStreamingStore } from '@/stores/streaming';
const state = useStreamingStore()
</script>