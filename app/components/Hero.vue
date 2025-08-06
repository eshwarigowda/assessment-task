<template>
  <!-- Hero Section -->
  <section id="home" class="max-w-7xl mx-auto px-5 py-16 mt-80">
    <div class="w-full flex flex-col lg:flex-row-reverse justify-between items-start">
      
      <!-- Hero Image -->
      <div class="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-right lg:ml-12 lg:mr-2">  
        <img
          src="/image/hero-img.png"
          alt="Hero Image"
          class="w-full h-auto mx-auto lg:mx-0 lg:-mt-16 animate-updown"
        />
      </div>

      <!-- Text Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-left mt-10 lg:mt-0">
        <h1 class="text-5xl sm:text-6xl font-bold text-gray-500">
          Elegant and creative solutions
        </h1>
        <p class="text-xl sm:text-2xl text-gray-500">
          We are a team of talented designers making websites with Bootstrap.
        </p>

        <!-- Buttons -->
        <div class="flex flex-row items-center space-x-6">
          <a
            href="#about"
            class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            Get Started
        </a>

          <a
            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
            class="text-green-600 font-medium flex items-center space-x-2 hover:text-green-700 transition"
          >
            <i class="fas fa-play-circle text-xl"></i>
            <span>Watch Video</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Info Section -->
  
    <section id="featured-services" class="py-20 bg-white relative lg:-mt-18">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-8">

        <!-- Item 1 -->
        <div class="flex-1 bg-gray-100 shadow-md p-8 text-left min-h-[290px] transform transition-transform duration-300 hover:-translate-y-3">
          <div class="mt-14">
            <div class="text-green-600 text-4xl mb-4">
              <i class="fas fa-chart-line"></i>
            </div>
            <h4 class="text-xl font-semibold mb-2 mt-4">
              <a href="#" class="hover:underline">Lorem Ipsum</a>
            </h4>
            <p class="text-gray-600">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
            </p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="flex-1 bg-gray-100 shadow-md p-8 text-left min-h-[290px] transform transition-transform duration-300 hover:-translate-y-3">
          <div class="mt-14">
            <div class="text-green-600 text-4xl mb-4">
              <i class="fas fa-square"></i>
            </div>
            <h4 class="text-xl font-semibold mb-2">
              <a href="#" class="hover:underline">Sed ut perspici</a>
            </h4>
            <p class="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="flex-1 bg-gray-100 shadow-md p-8 text-left min-h-[290px] transform transition-transform duration-300 hover:-translate-y-3">
          <div class="mt-14">
            <div class="text-green-600 text-4xl mb-4">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <h4 class="text-xl font-semibold mb-2">
              <a href="#" class="hover:underline">Magni Dolores</a>
            </h4>
            <p class="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
