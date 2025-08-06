<template>
  <div class="flex flex-col items-center">
    <!-- Card -->
    <div class="relative bg-white shadow-md rounded-xl px-6 pt-8 pb-20 text-center">
      <p class="italic text-gray-600">
        <i class="bi bi-quote quote-icon-left text-green-500 mr-1"></i>
        {{ text }}
        <i class="bi bi-quote quote-icon-right text-green-500 ml-1"></i>
      </p>
      <!--  Image -->
      <div class="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
        <img :src="image" :alt="name" class="w-24 h-24 rounded-full border-4 border-white shadow-md" />
      </div>
    </div>

    <!-- Name| Role -->
    <div class="mt-16 text-center">
      <h3 class="text-lg font-semibold text-gray-800">{{ name }}</h3>
      <p class="text-sm text-gray-500">{{ role }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  role: String,
  text: String,
})
</script>
