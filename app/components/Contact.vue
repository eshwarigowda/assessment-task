<script setup>
import { ref } from 'vue'
import ContactInfoItem from '@/components/ContactInfoItem.vue'  
import BaseButton from '@/components/BaseButton.vue'             

const activeIcon = ref(null)

function toggleIcon(icon) {
  activeIcon.value = activeIcon.value === icon ? null : icon
}
function onSubmit() {
  
  alert('Form submitted')
}

const contactItems = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Address',
    text: 'A108 Adam Street, New York, NY 535022',
    key: 'address'
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Call Us',
    text: '+1 5589 55488 55',
    key: 'phone'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email Us',
    text: 'info@example.com',
    key: 'envelop'
  }
]
</script>

<template>
  <section id="contact" class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-1">
      <!-- Heading Section -->
      <div class="text-center mb-6 relative">
        <!-- Background-->
        <h2
          class="text-4xl sm:text-6xl font-semibold text-gray-200 absolute inset-0 flex items-center justify-center select-none -mt-4"
        >
          SECTION TITLE
        </h2>
        <h3 class="relative text-3xl font-medium text-gray-600 pt-30 sm:pt-20">CONTACT</h3>

        <p class="relative text-gray-700 mt-8 text-[1.111rem] max-w-3xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- White Box  -->
      <div
        class="grid grid-cols-1 md:grid-cols-[40%_57%] gap-y-8 md:gap-x-6 box-border"
      >
        <!-- Left Side: Contact Info -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="space-y-6">
            <ContactInfoItem
              v-for="item in contactItems"
              :key="item.key"
              :icon="item.icon"
              :title="item.title"
              :text="item.text"
              :active="activeIcon === item.key"
              :onToggle="() => toggleIcon(item.key)"
            />
          </div>

          <!-- Google Map -->
          <div class="mt-6">
            <iframe
              class="w-full h-64 md:h-80 border-0 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8742602535553!2d-74.01021418459397!3d40.713030979330245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316278d0f7%3A0x9c7b0ef0aa1ad69e!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1631360603852!5m2!1sen!2sin"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <form class="space-y-4 max-w-xl mx-auto" @submit.prevent="onSubmit">
            <!-- Name & Email Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block mb-1 text-gray-600 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder=""
                  class="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
              <div>
                <label class="block mb-1 text-gray-600 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder=""
                  class="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
            </div>

            <!-- Subject Field -->
            <div>
              <label class="block mb-1 text-gray-600 font-medium">Subject</label>
              <input
                type="text"
                placeholder=""
                class="border border-gray-300 px-4 py-2 w-full"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label class="block mb-1 text-gray-600 font-medium">Message</label>
              <textarea
                rows="6"
                placeholder=""
                class="border border-gray-300 px-4 py-2 w-full h-60"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center mt-4">
              <BaseButton
              type="submit"
              label="Send Message"
              size="md"
            />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
