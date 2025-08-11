<script setup>
import Card from "@/components/Card.vue";
import Basebutton from "~/components/BaseButton.vue";
import { BaseButton } from "#components";

const infoCards = [
  {
    icon: "fas fa-chart-line",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    icon: "fas fa-square",
    title: "Sed ut perspici",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
  },
];
</script>

<template>
  <!-- Hero Section -->
  <section data-aos="fade-up"
    id="home"
    class="max-w-7xl mx-auto px-2 md:px-5 lg:px-5 py-50 sm:py-16 mt-20 sm:mt-30 lg:mt-70"
  >
    <div
      class="w-full flex flex-col lg:flex-row-reverse justify-between items-start"
    >
      <!-- Hero Image -->
      <div
        class="w-full lg:w-1/2 -mt-28 flex justify-center lg:justify-end lg:ml-12 lg:mr-2"
      >
        <img
          src="/image/hero-img.png"
          alt="Hero Image"
          class="w-[100%] sm:w-[70%] md:w-[60%] lg:w-full h-auto animate-updown"
        />
      </div>

      <!-- Text Content -->
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-left mt-10 lg:mt-0 sm:px-0 -px-2"
      >
        <h1 class="text-3xl sm:text-6xl font-bold text-gray-500">
          Elegant and creative solutions
        </h1>
        <p class="text-lg sm:text-xl text-gray-500">
          We are a team of talented designers making websites with Bootstrap.
        </p>

        <!-- Buttons -->
        <div class="flex flex-row items-center space-x-2 flex-nowrap">
          <BaseButton href="#about">
            Get Started
          </BaseButton>

          <a
            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
            class="font-medium flex items-center space-x-1 hover:text-green-700 transition whitespace-nowrap"
          >
            <i class="fas fa-play-circle text-xl text-green-500"></i>
            <span class="text-black">Watch Video</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Info Section -->
  <section
    id="featured-services"
    class="py-2 sm:py-20 bg-white relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-5"
  >
    <div class="grid gap-8 lg:grid-cols-3 mt-[-100px]">
      <Card
        v-for="(card, index) in infoCards"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :description="card.description"
        bg="bg-gray-20" 
        height="h-65"
        class="bg-gray-100 hover:-translate-y-3 transition-transform flex items-start text-left text-gray-400 p-14"
        
      />
    </div>
  </section>
</template>

<style scoped>

</style>
