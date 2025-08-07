<template>
  <div class="flex min-h-screen items-center bg-white px-4 py-12">
    <!-- Left: Scrolling Images -->
    <div class="w-1/2 overflow-hidden">
      <div
        class="flex animate-scroll-images w-max gap-4"
        :style="{ animationDuration: duration + 's' }"
      >
        <!-- Loop images twice for smooth infinite scroll -->
        <template v-for="n in 2">
          <img
            v-for="(img, index) in images"
            :key="`img-${n}-${index}`"
            :src="img"
            alt="Project Image"
            class="w-48 h-64 object-cover rounded shadow"
          />
        </template>
      </div>
    </div>

    <!-- Right: Static Text Content -->
    <div class="w-1/2 px-6">
      <h2 class="text-2xl font-bold text-blue-900 mb-4">
        Exercitationem repudiandae officiis neque suscipit
      </h2>
      <p class="text-gray-600 mb-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eos dolorem ducimus.
      </p>

      <div class="bg-gray-100 p-4 rounded shadow-md text-sm text-gray-700 space-y-1">
        <p><strong>Categories:</strong> Web design</p>
        <p><strong>Clients:</strong> ASU Company</p>
        <p><strong>Project date:</strong> March, 2020</p>
        <p>
          <strong>Project URL:</strong>
          <a href="https://www.example.com" class="text-green-700 underline">www.example.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const duration = 30 // Duration for one full loop (adjust based on image count)

const images = [
  '/image/portfolio/app-1.jpg', '/image/portfolio/product-1.jpg', '/image/portfolio/branding-1.jpg', '/image/portfolio/books-1.jpg',
  '/image/portfolio/app-2.jpg', '/image/portfolio/product-2.jpg', '/image/portfolio/branding-2.jpg', '/image/portfolio/books-2.jpg',
  '/image/portfolio/app-3.jpg', '/image/portfolio/product-3.jpg', '/image/portfolio/branding-3.jpg', '/image/portfolio/books-3.jpg'
]
</script>

<style scoped>
@keyframes scroll-images {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-images {
  animation: scroll-images linear infinite;
}

</style>