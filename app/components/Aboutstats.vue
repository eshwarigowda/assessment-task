<script setup>
import StatCard from './StatCard.vue' 

const openYoutube = () => {
  window.open('https://www.youtube.com/watch?v=Y7f98aduVJ8', '_blank')
}
</script>

<template>
  <section data-aos="fade-up" id="about" class="py-2 sm:py-2 bg-white max-w-7xl mx-auto px-4 sm:px-5 lg:px-5">
    <div>
      <!-- Heading Section -->
      <div class="text-center mb-6 relative">
        <h2
          style="font-family: 'Raleway', sans-serif;"
          class="text-3xl sm:text-5xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-10 sm:mt-2"
        >
          ABOUT US
        </h2>

        <h3 class="font-bold relative text-2xl sm:text-3xl text-gray-600 pt-20 sm:pt-18">ABOUT</h3>
        <p class="relative text-gray-700 mt-7 sm:mt-2 sm:text-[1.111rem]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- About Content -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-10 mt-2">
        <div class="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/image/about.png"
            alt="About Image"
            class="w-full lg:w-[600px] h-auto object-contain"
          />

          <!-- Play Button -->
          <button
            @click="openYoutube"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
          >
            <!-- ping -->
            <span
              class="absolute w-14 h-14 rounded-full border-4 border-green-800 opacity-60 animate-ping top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></span>
            <span
              class="relative z-10 flex items-center justify-center w-16 h-16 bg-green-700 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-150"
            >
              <svg class="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Text -->
        <div class="w-full lg:w-1/2 text-left">
          <h2 class="text-3xl sm:text-3xl font-bold text-gray-500 mb-4 -mt-4 sm:mt-10">
            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
          </h2>
          <p class="text-base sm:text-lg text-gray-700 italic mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="text-base sm:text-lg space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <svg
                class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 13l4 4L15 5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 13l4 4L15 5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 13l4 4L15 5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </span>
            </li>
          </ul>
          <p class="text-base sm:text-lg mt-4 sm:mt-2 text-gray-700">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section data-aos="fade-up" class="py-24 bg-white">
    <div
      class="stats-section max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-2 ">
      <StatCard :value="232" label="Clients" />
      <StatCard :value="521" label="Projects" />
      <StatCard :value="1453" label="Hours Of Support" />
      <StatCard :value="32" label="Workers" />
    </div>
  </section>
</template>
