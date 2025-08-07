<template>
  <section id="portfolio"class="py-10 bg-white">
    <div class="container mx-auto px-4">
      <!-- Heading Section -->
      <div class="text-center mb-6 relative">
      <!-- Background-->
        <h2 class="text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-4">
          PORTFOILO
        </h2>
        <h3 class="relative text-4xl font-medium text-gray-600 pt-20">PORTFOILO</h3>
        
        <p class="relative text-gray-700  mt-8 text-[1.111rem]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Filter -->
       
<div class="flex flex-wrap justify-center gap-6 mb-10">
  <span
    v-for="category in categories"
    :key="category"
    @click="selectedCategory = category"
    class="cursor-pointer text-lg font-medium transition-colors duration-300"
    :class="[
      selectedCategory === category
        ? 'text-green-600'
        : 'text-gray-600 hover:text-green-600'
    ]"
  >
    {{ category }}
  </span>
</div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in filteredPortfolio"
          :key="index"
          class="relative group overflow-hidden shadow border border-gray-200"
        >
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-64 object-cover transition-transform duration-300"
          />

          <!-- Hover White Box at Bottom Center -->
          <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-4  shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <h3 class="text-base font-semibold text-gray-700 mb-1">{{ item.title }}</h3>
            <div class="flex items-center gap-3 text-gray-500 text-sm">
              <span>{{ item.description }}</span>

              <!-- Search Icon -->
              <button @click="openImage(item.image)">
                <i class="fas fa-search"></i>
              </button>

              <!-- Link Icon -->
              <NuxtLink :to="`portfolio-details`">
                <i class="fas fa-link"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Image Viewer -->
    <div v-if="fullImage" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <img :src="fullImage" class="max-h-[90vh] max-w-[90vw] rounded shadow-lg" />
      <button class="absolute top-6 right-6 text-white text-3xl" @click="fullImage = null">&times;</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Portfolio categories
const categories = ['ALL', 'APP', 'PRODUCT', 'BRANDING', 'BOOKS']

// Selected filter
const selectedCategory = ref('ALL')
const fullImage = ref(null)

const openImage = (url) => {
  fullImage.value = url
}

// Portfolio items
const portfolioItems = ref([
  { id: 1, category: 'APP', title: 'App 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/app-1.jpg' },
  { id: 2, category: 'PRODUCT', title: 'Product 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/product-1.jpg' },
  { id: 3, category: 'BRANDING', title: 'Branding 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/branding-1.jpg' },
  { id: 4, category: 'BOOKS', title: 'Book 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/books-1.jpg' },
  { id: 1, category: 'APP', title: 'App 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/app-2.jpg' },
  { id: 2, category: 'PRODUCT', title: 'Product 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/product-2.jpg' },
  { id: 3, category: 'BRANDING', title: 'Branding 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/branding-2.jpg' },
  { id: 4, category: 'BOOKS', title: 'Book 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/books-2.jpg' },
  { id: 1, category: 'APP', title: 'App 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/app-3.jpg' },
  { id: 2, category: 'PRODUCT', title: 'Product 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/product-3.jpg' },
  { id: 3, category: 'BRANDING', title: 'Branding 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/branding-3.jpg' },
  { id: 4, category: 'BOOKS', title: 'Book 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: '/image/portfolio/books-3.jpg' },
  

   
])

// Filter portfolio items
const filteredPortfolio = computed(() => {
  return selectedCategory.value === 'ALL'
    ? portfolioItems.value
    : portfolioItems.value.filter(item => item.category === selectedCategory.value)
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
