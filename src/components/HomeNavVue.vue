<template>
  <div class="flex md:flex-row flex-col" :class="state.dark">

    <div class="w-full md:w-1/2 flex flex-col justify-center items-center dark:bg-gray-700 dark:text-white">
      <h1 class="text-center text-3xl md:text-5xl mb-4 font-mediumtransition-all ease" :class="opacity">{{ data.title }}</h1>
      <p class="text-start w-full md:w-4/5 text-[1.1rem] font-normaltransition-all ease" :class="opacity">{{ data.description }}</p>
      <div class="hidden md:block w-4/5 mt-6" :class="opacity">
        <button class="border border-green-500 text-green-500 dark:border-white dark:text-white text-start p-2 rounded-2xl">Seguir Leyendo</button>
      </div>
    </div>

    <div class="w-full md:w-1/2 flex flex-col justify-center items-center dark:bg-gray-700 dark:text-white">
      <div class="md:h-28 h-10"></div>
      <div class="w-full md:w-2/3 flex">
        <img class="rounded-lg transition duration-700 ease-in-out" :class="opacity" :src="data.img" alt="img-nav" />
      </div>
    </div>

    <div class="block md:hidden w-full text-center mt-6" :class="opacity">
        <button class="border border-green-500 text-green-500 dark:border-white dark:text-white text-start p-2 rounded-2xl">Seguir Leyendo</button>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from '@/stores/streaming'
import { ref, onMounted } from 'vue'
import type { Data } from '@/types';


const initialData: Data[] = [
  {
    title: 'Landing Page 1',
    img: 'https://img.freepik.com/psd-premium/plantilla-publicacion-redes-sociales-venta-flash_122059-1016.jpg?w=740',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditate ipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim quia officiis quasi quod impedit id cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditateipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim qui  officiis quasi quod impedit id cum'
  },
  {
    title: 'Landing Page 2',
    img:'https://img.freepik.com/vector-gratis/envase-cosmetico-realista_1268-1266.jpg?w=740&t=st=1696715345~exp=1696715945~hmac=2deebd61895076057de8637762ecbe5b723ab39ad0a03bfd5856866beb426140',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditate ipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim quia officiis quasi quod impedit id cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditateipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum '
  }
]

const data = ref<Data>({
  title: 'Landing Page 1',
    img: 'https://img.freepik.com/psd-premium/plantilla-publicacion-redes-sociales-venta-flash_122059-1016.jpg?w=740',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditate ipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim quia officiis quasi quod impedit id cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe ad cupiditateipsum, a fuga possimus repudiandae, adipisci corrupti explicabo veniam. Illum enim qui  officiis quasi quod impedit id cum'
  }
)
const cont = ref<number>(0)
const opacity = ref<string>('')

onMounted(() => {
  setInterval(() => (opacity.value = 'opacity-0'), 3980)
  setInterval(() => {
    cont.value = (cont.value + 1) % initialData.length
    data.value = initialData[cont.value]
    opacity.value = ''
  }, 4000)
})

const state = useStreamingStore()
</script>

<style scoped></style>
