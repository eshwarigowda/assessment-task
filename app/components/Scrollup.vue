<template>
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 sm:right-6 z-50  bg-green-500 text-white w-12 h-12 rounded-full hover:bg-green-600 transition"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>