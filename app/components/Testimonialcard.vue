<script setup>
defineProps({
  image: String,
  name: String,
  role: String,
  text: String,
})
</script>

<template>
  <div class="flex flex-col items-center px-4 sm:px-6">
    <!-- Card -->
    <div
      class="relative bg-gray-100 shadow-md rounded-xl pt-4 pb-10 text-center w-full max-w-md sm:max-w-none"
    >
      <p class="italic text-gray-600 px-4 sm:px-8">
        <i class="fas fa-quote-left text-green-500 mr-1"></i>
        {{ text }}
        <i class="fas fa-quote-right text-green-500 ml-1"></i>
      </p>
      <!-- Image -->
      <div
        class="absolute left-[45%] -bottom-16 transform -translate-x-1/2"
      >
        <img
          :src="image"
          :alt="name"
          class="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>
    </div>

    <!-- Name | Role -->
    <!-- <div class="mt-16 text-left"> -->
    <div class="mt-16 text-left px-10 sm:px-0 max-w-md mx-auto sm:mx-0">  
      <h3 class="text-base sm:text-lg font-semibold text-gray-800">
        {{ name }}
      </h3>
      <p class="text-xs sm:text-sm text-gray-500">{{ role }}</p>
    </div>
  </div>
</template>

