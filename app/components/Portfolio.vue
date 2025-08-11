<script setup>
import { ref, computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'

// Categories
const categories = ['ALL', 'APP', 'PRODUCT', 'BRANDING', 'BOOKS']

const selectedCategory = ref('ALL')
const fullImage = ref(null)
const openIndex = ref(null)  // Track which card overlay is open on mobile
const hoverIndex = ref(null) // Track hover on desktop
const isMobile = ref(false)  // Detect mobile viewport

// Toggle overlay on mobile cards
const toggleCard = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

// Open full image viewer
const openImage = (url) => {
  fullImage.value = url
}

// Detect if viewport is mobile (below lg breakpoint)
onMounted(() => {
  const updateDeviceType = () => {
    isMobile.value = window.innerWidth < 1024
  }
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})

// Portfolio Items
const portfolioItems = ref([
  { id: 1, category: 'APP', title: 'App 1', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/app-1.jpg' },
  { id: 2, category: 'PRODUCT', title: 'Product 1', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/product-1.jpg' },
  { id: 3, category: 'BRANDING', title: 'Branding 1', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/branding-1.jpg' },
  { id: 4, category: 'BOOKS', title: 'Book 1', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/books-1.jpg' },
  { id: 5, category: 'APP', title: 'App 2', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/app-2.jpg' },
  { id: 6, category: 'PRODUCT', title: 'Product 2', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/product-2.jpg' },
  { id: 7, category: 'BRANDING', title: 'Branding 2', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/branding-2.jpg' },
  { id: 8, category: 'BOOKS', title: 'Book 2', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/books-2.jpg' },
  { id: 9, category: 'APP', title: 'App 3', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/app-3.jpg' },
  { id: 10, category: 'PRODUCT', title: 'Product 3', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/product-3.jpg' },
  { id: 11, category: 'BRANDING', title: 'Branding 3', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/branding-3.jpg' },
  { id: 12, category: 'BOOKS', title: 'Book 3', description: 'Lorem ipsum dolor sit amet consectetur', image: '/image/portfolio/books-3.jpg' }
])

// Filtered Portfolio based on selected category
const filteredPortfolio = computed(() => {
  return selectedCategory.value === 'ALL'
    ? portfolioItems.value
    : portfolioItems.value.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <section id="portfolio" class="py-10 bg-white">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
      <!-- Heading Section -->
      <div class="text-center mb-6 relative">
        <h2
          class="text-4xl sm:text-3xl md:text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-12 sm:-mt-4"
        >
          PORTFOLIO
        </h2>
        <h3 class="relative text-3xl sm:text-4xl font-medium text-gray-600 pt-20">
          PORTFOLIO
        </h3>
        <p class="relative text-gray-700 mt-8 text-base sm:text-lg md:text-[1.111rem] max-w-2xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Filter Buttons -->
      <div
        class="flex overflow-x-auto scrollbar-hide gap-2 sm:gap-6 mb-8 text-sm flex-nowrap px-4 sm:px-6 justify-start sm:justify-center"
      >
        <span
         v-for="category in categories"
         :key="category"
         @click="selectedCategory = category"
         class="cursor-pointer font-bold  whitespace-nowrap min-w-max transition-colors duration-300 text-gray-600 hover:text-green-600"
        :class="selectedCategory === category ? 'text-green-600 border-b-2 border-green-600 pb-1' : ''"
        >
        {{ category }}
        </span>

      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="(item, index) in filteredPortfolio"
          :key="item.id"
          :image="item.image"
          :title="''"
          :description="''"
          :imageCover="true"
          height="h-64"
          class="relative shadow border border-gray-200 cursor-pointer"
          @click="isMobile && toggleCard(index)"
          @mouseenter="!isMobile && (hoverIndex = index)"
          @mouseleave="!isMobile && (hoverIndex = null)"
        >
          <template #info>
            <div
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-4 shadow-lg transition-opacity duration-300"
              :class="{
                'opacity-0 lg:group-hover:opacity-100': true,
                'opacity-100': (!isMobile && hoverIndex === index) || (isMobile && openIndex === index)
              }"
              @click.stop
            >
              <h3 class="text-base font-semibold text-gray-700 mb-1">{{ item.title }}</h3>
              <div class="flex items-center gap-3 text-gray-500 text-sm">
                <span>{{ item.description }}</span>

                <!-- Search Icon -->
                <button @click.stop="openImage(item.image)" aria-label="View image">
                  <i class="fas fa-search"></i>
                </button>

                <!-- Link Icon -->
                <NuxtLink to="/portfolio-details" @click.stop aria-label="Portfolio details">
                  <i class="fas fa-link"></i>
                </NuxtLink>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Fullscreen Image Viewer -->
    <div
      v-if="fullImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4 sm:px-6"
    >
      <img
        :src="fullImage"
        class="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
        alt="Full portfolio item"
      />

      <button
        class="absolute top-6 right-6 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow hover:bg-gray-200 transition"
        @click="fullImage = null"
        aria-label="Close image viewer"
      >
        &times;
      </button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
</style>
