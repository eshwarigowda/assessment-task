<template>
  <header class="fixed top-0  w-full z-50 bg-white shadow-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
      <!-- Logo &  Get Started -->
      <div class="flex items-center gap-4">
        <h1 class="text-3xl font-bold text-gray-600">
          <a href="#about">eNno</a>
        </h1>
        <a href="#about"
          class="md:hidden bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
        >
          Get Started
        </a>
      </div>

      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-6 text-base relative">
        
        <a href="#home" class="text-gray-500 hover:text-green-600">Home</a>
        <a href="#about" class="text-gray-500 hover:text-green-600">About</a> 
        <a href="#service" class="text-gray-500 hover:text-green-600">Services</a>
        <a href="#portfolio" class="text-gray-500 hover:text-green-600">Portfolio</a>
        <a href="#team" class="text-gray-500 hover:text-green-600">Team</a>
        

        <!-- Desktop Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 text-gray-700 hover:text-green-600">
            Dropdown
            <span class="text-xs">&#9662;</span>
          </button>
          <ul class="absolute hidden group-hover:block bg-white shadow-md border mt-2 w-44 z-50">
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dropdown 1</li>

            <!-- Deep dropdown -->
            <li class="relative group/sub px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Deep Dropdown
              <span class="float-right">&#9656;</span>
              <ul
                class="absolute hidden group-hover/sub:block top-0 left-full ml-1 w-44 bg-white border shadow-md z-50"
              >
                <li class="px-4 py-2 hover:bg-gray-100">Suboption A</li>
                <li class="px-4 py-2 hover:bg-gray-100">Suboption B</li>
              </ul>
            </li>

            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dropdown 2</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dropdown 3</li>
          </ul>
        </div>

        <a href="#contact" class="text-gray-500 hover:text-green-600">Contact</a>

        <a href="#about"
          class="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
        >
          Get Started
        </a>
      </nav>

      <!-- Hamburger for Mobile -->
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
  v-if="isOpen"
  class="md:hidden fixed top-16 left-0 w-full h-screen bg-white px-6 py-4 space-y-2 z-40 overflow-y-auto transition-all duration-300">

      <NuxtLink to="/home" class="block text-gray-700 hover:text-green-600">Home</NuxtLink>
      <NuxtLink to="/about" class="block text-gray-700 hover:text-green-600">About</NuxtLink>
      <NuxtLink to="/services" class="block text-gray-700 hover:text-green-600">Services</NuxtLink>
      <NuxtLink to="/portfolio" class="block text-gray-700 hover:text-green-600">Portfolio</NuxtLink>
      <NuxtLink to="/team" class="block text-gray-700 hover:text-green-600">Team</NuxtLink>

      <!-- Mobile Dropdown Button -->
      <div>
        <button @click="toggleDropdown" class="w-full flex justify-between items-center text-gray-700 font-semibold hover:text-green-600">
          Dropdown
          <svg
            :class="['w-4 h-4 transform transition-transform duration-300', { 'rotate-180': isDropdownOpen }]"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown Content -->
        <div v-if="isDropdownOpen" class="ml-4 mt-2 space-y-1">
          <p class="text-gray-600 hover:text-green-600 cursor-pointer">Dropdown 1</p>

          <!-- Deep Dropdown -->
          <div>
            <button @click="toggleSubDropdown" class="w-full flex justify-between items-center text-gray-600 hover:text-green-600">
              Deep Dropdown
              <svg
                :class="['w-4 h-4 transform transition-transform duration-300', { 'rotate-180': isSubDropdownOpen }]"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="isSubDropdownOpen" class="ml-4 mt-1 space-y-1">
              <p class="text-gray-600 hover:text-green-600 cursor-pointer">Suboption A</p>
              <p class="text-gray-600 hover:text-green-600 cursor-pointer">Suboption B</p>
            </div>
          </div>

          <p class="text-gray-600 hover:text-green-600 cursor-pointer">Dropdown 2</p>
          <p class="text-gray-600 hover:text-green-600 cursor-pointer">Dropdown 3</p>
        </div>
      </div>
      <a href="#contact" class="text-gray-500 hover:text-green-600">Contact</a>
      
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isDropdownOpen = ref(false)
const isSubDropdownOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  
  if (!isOpen.value) {
    isDropdownOpen.value = false
    isSubDropdownOpen.value = false
  }
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
  isSubDropdownOpen.value = false
}

const toggleSubDropdown = () => {
  isSubDropdownOpen.value = !isSubDropdownOpen.value
}
</script>
