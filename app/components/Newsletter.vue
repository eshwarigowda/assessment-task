<script setup>
import BaseButton from '@/components/BaseButton.vue'

function onSubmit() {
  alert('Subscribed!')
}

</script>

<template>
  <!-- Newsletter Section -->
  <section data-aos="fade-up" class="bg-gray-100 py-30 px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Join Our Newsletter</h2>
      <p class="text-gray-600 mb-6">
        Subscribe to our newsletter and receive the latest news about our products and services!
      </p>
      <!-- Form with white container -->
      <form class="max-w-xl mx-auto" @submit.prevent="onSubmit">
        <div class="flex items-center bg-white rounded-full shadow-md border border-gray-300 px-2">
          <input
            type="email"
            class="w-full rounded-full px-6 py-3 bg-transparent focus:outline-none"
          />
          <BaseButton
            type="submit"
            label="Subscribe"
            size="sm"
            class="rounded-full px-5 py-2 ml-2"
          />
        </div>
      </form>
    </div>
  </section>
</template>

