<template>
 
  <section  id="about" class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-1">
      <!-- Heading Section -->
      <div class="text-center mb-6 relative">
        <h2 class="text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-4">
          ABOUT US
        </h2>
        <h3 class="relative text-4xl font-medium text-gray-600 pt-20">ABOUT</h3>
        <p class="relative text-gray-700  mt-7 text-[1.111rem]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- About -->
            <div class="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 mt-16 w-full">

        <!--Image -->
        <div class="relative w-full md:w-full lg:w-1/2">
         <img
         src="/image/about.png"
         alt="About Image"
         class="w-full h-auto object-contain"
        />

  <!-- Play Button --> 
<button
  @click="openYoutube"
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
>
  <!-- Outer Glowing Ring -->
  <span
    class="absolute w-14 h-14 top-1/2 left-1/2  rounded-full border-4 border-green-800 opacity-60 animate-ping -translate-x-1/2 -translate-y-1/2"
  ></span>

  <!-- Play Button -->
  <span
    class="relative z-10 flex items-center justify-center w-16 h-16 bg-green-700 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-150"
  >
    <svg
      class="w-8 h-8 text-white ml-1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
</button>
</div>
        <!--  Text -->
        <div class="w-full md:w-full lg:w-1/2">
            
          <h2 class="text-3xl font-bold text-gray-500 mb-4 mt-1">
            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
          </h2>
          <p class="text-xl text-gray-700 italic mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="text-xl space-y-4 text-gray-700">
            <li class="flex items-start gap-2">
          <!-- Double tick -->
    <svg class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1 13l4 4L15 5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
  </li>

  <li class="flex items-start gap-2">
    <svg class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1 13l4 4L15 5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
  </li>

  <li class="flex items-start gap-2">
    <svg class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1 13l4 4L15 5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span>
      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
    </span>
  </li>
</ul>

          <p class="text-xl space-y-2 text-gray-700 mt-4">
            
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            
          </p>
        </div>
      </div>
    </div>
  </section>




  
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-50 text-center mt-11 ">
        
      <div>
        <h3 class="text-5xl font-bold text-green-600 ">232</h3>
        <p class="text-gray-500 mt-5">Clients</p>
      </div>
      <div>
        <h3 class="text-5xl font-bold text-green-600">521</h3>
        <p class=" text-gray-500 mt-5">Projects</p>
      </div>
      <div>
        <h3 class="text-5xl font-bold text-green-600">1453</h3>
        <p class="text-gray-500 mt-5 whitespace-nowrap">Hours Of Support</p>
      </div>
      <div>
        <h3 class="text-5xl font-bold text-green-600">32</h3>
        <p class="text-gray-500 mt-5">Workers</p>
      </div>
    </div>
  </section>


</template>

<script setup>
const openYoutube = () => {
  window.open('https://www.youtube.com/watch?v=Y7f98aduVJ8', '_blank')
}
</script>
