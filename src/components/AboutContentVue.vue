<template>
  <div class="flex md:flex-row flex-col pt-20">
    <div class="w-full md:w-1/2">
      <img
        class="rounded-xl"
        src="https://img.freepik.com/foto-gratis/grupo-companeros-trabajo-oficina-posando_23-2148985515.jpg?w=740&t=st=1696810716~exp=1696811316~hmac=a43d1d20604aa735dd48b0184f8e236ac78f046dc1524988f7194e9bf5e93756"
        alt="about"
      />
    </div>
    <div class="w-full md:w-1/2">
      <h1 class="text-center text-xl mt-2 mb-2 font-medium">
        ¡Bienvenidos a [Nombre de Streaming]!
      </h1>
      <p class="ml-0 md:text-start text-center md:ml-4">
        Somos un equipo de apasionados desarrolladores colombianos que tienen una pasión compartida
        por la tecnología y la innovación. Nuestra historia comenzó con un sueño común: ofrecer a
        nuestros usuarios una experiencia única en el mundo del entretenimiento en línea.
      </p>
      <h1 class="ml-4 placeholder:text-lg mt-2 mb-2 font-medium">Lo que Ofrecemos</h1>
      <ol class="ml-14 font-medium text-lg mt-4">
        <li class="list-decimal my-2">Cuentas Premium</li>
        <li class="list-decimal my-2">Variedad de Servicios</li>
        <li class="list-decimal my-2">Atención al Cliente</li>
      </ol>
    </div>
  </div>

  <div class="flex md:flex-row flex-col pt-10">
    
    <div class="w-full md:w-1/2">
      <h1 class="text-center text-xl mt-2 mb-2 font-medium">
        Mision
      </h1>
      <p class="ml-0 md:text-start text-center md:ml-4">
        Somos un equipo de apasionados desarrolladores colombianos que tienen una pasión compartida
        por la tecnología y la innovación. Nuestra historia comenzó con un sueño común: ofrecer a
        nuestros usuarios una experiencia única en el mundo del entretenimiento en línea.
      </p>
      <h1 class="text-center text-xl mt-2 mb-2 font-medium">
        Vision
      </h1>
      <p class="ml-0 md:text-start text-center md:ml-4">
        Somos un equipo de apasionados desarrolladores colombianos que tienen una pasión compartida
        por la tecnología y la innovación. Nuestra historia comenzó con un sueño común: ofrecer a
        nuestros usuarios una experiencia única en el mundo del entretenimiento en línea.
      </p>
      <h1 class="text-center text-xl mt-2 mb-2 font-medium">
        Valores
      </h1>
      <p class="ml-0 md:text-start text-center md:ml-4">
        Somos un equipo de apasionados desarrolladores colombianos que tienen una pasión compartida
        por la tecnología y la innovación. Nuestra historia comenzó con un sueño común: ofrecer a
        nuestros usuarios una experiencia única en el mundo del entretenimiento en línea.
      </p>
    </div>
    <div class="w-full md:w-1/2">
      <img
        class="rounded-xl"
        src="https://img.freepik.com/foto-gratis/grupo-companeros-trabajo-oficina-posando_23-2148985515.jpg?w=740&t=st=1696810716~exp=1696811316~hmac=a43d1d20604aa735dd48b0184f8e236ac78f046dc1524988f7194e9bf5e93756"
        alt="about"
      />
    </div>
  </div>

  <div class="flex w-full justify-center gap-8 my-10 items-center">
    <RouterLink to=""><img class="w-16" src="../assets/facebook.png" alt="facebook"></RouterLink>
    <RouterLink to=""><img class="w-16 rounded-full" src="../assets/instagram.webp" alt="instagram"></RouterLink>
    <RouterLink to=""><img class="w-16 h-16 rounded-full" src="../assets/youtube.webp" alt="youtube"></RouterLink>
  </div>
</template>

<script setup lang="ts"></script>
