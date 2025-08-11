<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '~/components/BaseButton.vue'

const isOpen = ref(false)
const isDropdownOpen = ref(false)
const isSubDropdownOpen = ref(false)
const hasShadow = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    isDropdownOpen.value = false
    isSubDropdownOpen.value = false
  }
}

const closeMenu = () => {
  isOpen.value = false
  isDropdownOpen.value = false
  isSubDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
  isSubDropdownOpen.value = false
}

const toggleSubDropdown = () => {
  isSubDropdownOpen.value = !isSubDropdownOpen.value
}

const onScroll = () => {
  hasShadow.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="[ 'fixed top-0 w-full z-50 bg-white border-gray-200', hasShadow ? 'shadow-md' : '' ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-6 sm:py-6 md:px-20">

      <div class="flex items-center gap-4">
        <h1 class="text-3xl font-bold text-gray-600 whitespace-nowrap font-raleway">
          <a href="/" class="navbar-brand" style="font-family: 'Raleway', sans-serif !important;">eNno</a>
        </h1>

        <!-- Mobile: smaller Get Started button visible only on mobile -->
        <div class="md:hidden flex items-center ml-12">
          <BaseButton size="sm" href="#about" label="Get Started" />
        </div>
      </div>

      <!-- Right side: Hamburger (mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden focus:outline-none p-2 ml-2"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isOpen"
          class="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6 text-green-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop menu -->
      <nav class="hidden md:flex items-center gap-8 text-base relative ml-auto">
        <a href="#home" class="text-gray-500 hover:text-green-700">Home</a>
        <a href="#about" class="text-gray-500 hover:text-green-700">About</a>
        <a href="#service" class="text-gray-500 hover:text-green-700">Services</a>
        <a href="#portfolio" class="text-gray-500 hover:text-green-700">Portfolio</a>
        <a href="#team" class="text-gray-500 hover:text-green-700">Team</a>

        <!-- Desktop Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 text-gray-500 hover:text-green-700">
            Dropdown <span class="text-xs">&#9662;</span>
          </button>
          <ul class="absolute hidden group-hover:block bg-white shadow-md border mt-2 w-44 z-50">
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dropdown 1</li>
            <li class="relative group/sub px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Deep Dropdown <span class="float-right">&#9656;</span>
              <ul class="absolute hidden group-hover/sub:block top-0 left-full ml-1 w-44 bg-white border shadow-md z-50">
                <li class="px-4 py-2 hover:bg-gray-100">Deep Dropdown 1</li>
                <li class="px-4 py-2 hover:bg-gray-100">Deep Dropdown 2</li>
                <li class="px-4 py-2 hover:bg-gray-100">Deep Dropdown 3</li>
                <li class="px-4 py-2 hover:bg-gray-100">Deep Dropdown 4</li>
                <li class="px-4 py-2 hover:bg-gray-100">Deep Dropdown 5</li>
          
              </ul>
            </li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dropdown 2</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dropdown 3</li>
          </ul>
        </div>

        <a href="#contact" class="text-gray-500 hover:text-green-700">Contact</a>

        <!-- Desktop Get Started button -->
        <BaseButton href="#about" label="Get Started" />
      </nav>
    </div>

    <!-- Mobile menu -->
  <div
    v-if="isOpen"
    @click="closeMenu"
    class="fixed inset-0 bg-black bg-opacity-10 z-30" style="background-color: rgba(0,0,0,0.70)"
     ></div>
  <div
    v-if="isOpen"
    class="fixed top-[64px] left-4 right-4 bottom-0 z-40 bg-white px-6 py-6 space-y-2 overflow-y-auto rounded-lg shadow-lg max-w-[calc(100vw-2rem)]"
    style="max-height: calc(100vh - 64px);"
  >
  <a
    href="#home"
    @click="closeMenu"
    class="block text-black hover:text-green-700 text-lg py-2"
  >Home</a>
  <a
    href="#about"
    @click="closeMenu"
    class="block text-black hover:text-green-700 text-lg py-2"
  >About</a>
  <a
    href="#service"
    @click="closeMenu"
    class="block text-black hover:text-green-700 text-lg py-2"
  >Services</a>
  <a
    href="#portfolio"
    @click="closeMenu"
    class="block text-black hover:text-green-700 text-lg py-2"
  >Portfolio</a>
  <a
    href="#team"
    @click="closeMenu"
    class="block text-black hover:text-green-700 text-lg py-2"
  >Team</a>

  <!-- Dropdown -->
  <div>
    <button
      @click="toggleDropdown"
      class="w-full flex justify-between items-center text-black font-semibold hover:text-green-700 py-2"
    >
      Dropdown
      <svg
        :class="[
          'w-4 h-4 transform transition-transform duration-300',
          { 'rotate-180': isDropdownOpen }
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="isDropdownOpen" class="ml-4 mt-2 space-y-1">
      <p class="text-black hover:text-green-700 cursor-pointer py-1">Dropdown 1</p>

      <!-- Sub Dropdown -->
      <div>
        <button
          @click="toggleSubDropdown"
          class="w-full flex justify-between items-center text-green-700 hover:text-green-600 py-1"
        >
          Deep Dropdown
          <svg
            :class="[
              'w-4 h-4 transform transition-transform duration-300',
              { 'rotate-180': isSubDropdownOpen }
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="isSubDropdownOpen" class="ml-4 mt-1 space-y-1">
          <p class="text-green-900 hover:text-green-700 cursor-pointer py-1">Suboption A</p>
          <p class="text-green-900 hover:text-green-700 cursor-pointer py-1">Suboption B</p>
        </div>
      </div>

      <p class="text-green-900 hover:text-green-700 cursor-pointer py-1">Dropdown 2</p>
      <p class="text-green-900 hover:text-green-700 cursor-pointer py-1">Dropdown 3</p>
    </div>
  </div>

  <a
    href="#contact"
    @click="closeMenu"
    class="block text-black hover:text-green-700 text-lg py-2"
  >Contact</a>
</div>

  </header>
</template>
