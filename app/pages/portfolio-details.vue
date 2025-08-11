<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = ref([
  '/image/portfolio/app-1.jpg',
  '/image/portfolio/product-1.jpg',
  '/image/portfolio/branding-1.jpg',
  '/image/portfolio/books-1.jpg',
  '/image/portfolio/app-2.jpg',
  '/image/portfolio/product-2.jpg',
  '/image/portfolio/branding-2.jpg',
  '/image/portfolio/books-2.jpg',
  '/image/portfolio/app-3.jpg',
  '/image/portfolio/product-3.jpg',
  '/image/portfolio/branding-3.jpg',
  '/image/portfolio/books-3.jpg',
])

const currentIndex = ref(0)
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }, 2500)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
import Navbar from '~/components/Navbar.vue';
import Newsletter from '~/components/Newsletter.vue';
import Footer from '~/components/Footer.vue';
</script>

<template>
  <Navbar />
  <div data-aos="fade-up" class="bg-white overflow-x-hidden">
    <!-- Header -->
     <div class="mt-[100px] sm:mt-[100px] flex flex-col sm:flex-row justify-between sm:items-center bg-gray-100 px-4 sm:px-6 py-4 space-y-2 sm:space-y-0">
      <h1 class="text-xl font-semibold text-gray-800">Portfolio Details</h1>
      <div class="text-gray-500 text-sm">
        <NuxtLink to="/" class="text-green-600 hover:underline">Home</NuxtLink>
        <span class="mx-1">/</span>
        <span>Portfolio Details</span>
      </div>
    </div>

    <!-- Main Section -->
    <div class="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-24 py-10">
      <!-- Image -->
      <div class="w-full lg:w-[70%] relative h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden shadow-md">
        <transition-group name="slide" mode="out-in">
          <img
            :key="images[currentIndex]"
            :src="images[currentIndex]"
            alt="Project Image"
            class="w-full h-full object-cover absolute inset-0"
          />
        </transition-group>
      </div>

      <!-- Text -->
      <div class="w-full lg:w-[30%] space-y-6">
        <!-- Info -->
        <div class="bg-white p-4 shadow">
          <h2 class="text-xl font-semibold text-gray-500 mb-2">Project Information</h2>
          <p><span class="font-bold">Category:</span> Web design</p>
          <p><span class="font-bold">Client:</span> ASU Company</p>
          <p><span class="font-bold">Project Date:</span> 01 March, 2020</p>
          <p>
            <span class="font-bold">Project URL:</span>
            <span class="text-green-600">www.example.com</span>
          </p>
        </div>

        <!-- Description -->
        <div>
          <h3 class="text-2xl font-bold text-gray-500">
            Exercitationem repudiandae officiis neque suscipit
          </h3>
          <p class="text-gray-500 mt-2">
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
            inventore commodi labore quia quia. Exercitationem repudiandae officiis
            neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium
            nesciunt est omnis tempora consectetur dignissimos.
          </p>
        </div>
      </div>
    </div>S

    <Newsletter />
    <div class="max-w-7xl mx-auto px-4">
    <Footer />
    </div>
  </div>
</template>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
  position: absolute;
  width: 100%;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
