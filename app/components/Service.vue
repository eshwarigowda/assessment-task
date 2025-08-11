<script setup>

import Card from '@/components/Card.vue'

const serviceCards = [
  {
    icon: 'fas fa-code',
    title: 'Nesciunt Mete',
    description: 'Provident nihil minus qui consequatur non omnis maiores.Eos accusantium minus dolores iure perferendis tempore et consequatur.'
  },
  {
    icon: 'fas fa-broadcast-tower',
    title: 'Eosle Commodi',
    description: 'Ut autem aut autem non a.Sint sint sit facilis nam iusto sint.Libero corrupti neque eum hic non ut nesciunt dolorem.'
  },
  {
    icon: 'fas fa-chalkboard',
    title: 'Ledo Markt',
    description: 'Ut excepturi voluptatem nisi sed.Quidem fuga consequatur.Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.'
  },
  {
    icon: 'fas fa-square',
    title: 'Asperiores Commodit',
    description: 'Non et temporibus minus omnis sed dolor esse consequatur.Cupiditate sed error ea fuga sit provident adipisci neque.'
  },
  {
    icon: 'fas fa-calendar-alt',
    title: 'Velit Doloremque',
    description: 'Cumque et suscipit saepe.Est maiores autem enim facilis ut aut ipsam corporis aut.Sed animi at autem alias eius labore.'
  },
  {
    icon: 'fa-regular fa-comments',
    title: 'Dolori Architecto',
    description: 'Hic molestias ea quibusdam eos.Fugiat enim doloremque aut neque non et debitis iure.Corrupti recusandae ducimus enim.'
  },
]
</script>

<template>
  <section id="service" class="py-6 sm:py-2 bg-gray-50 lg:-mt-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-1">
      <!-- Heading Section -->
      <div class="text-center mb-6 relative">
        <h2
          class="text-4xl sm:text-base md:text-6xl font-semibold text-gray-200 absolute inset-0 flex items-center justify-center select-none -mt-24 sm:-mt-6"
        >
          SERVICES
        </h2>
        <h3 class="relative text-2xl sm:text-3xl font-medium text-gray-600 pt-8 sm:pt-2 lg:pt-22">
          SERVICES
        </h3>
        <p class="relative text-gray-700 mt-4 text-base sm:text-lg md:text-[1.111rem] max-w-xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-16">
        <NuxtLink
          v-for="card in serviceCards"
          :key="card.id"
          :to="`/service-details`"
          class="block"
          aria-label="View service details"
>
        <Card
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          bg="bg-white"
          height="min-h-[400px] sm:min-h-[360px] md:min-h-[360px"
          class="p-6 pt-20 text-center border border-gray-200 hover:border-green-500 shadow transition duration-300"
  />
</NuxtLink>

     
      </div>
    </div>
  </section>
</template>
