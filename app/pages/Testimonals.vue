<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Heading -->
      <div class="text-center mb-6 relative">
        <h2 class="text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-20">
          TESTIMONIALS
        </h2>
        <h3 class="relative text-4xl font-medium text-gray-600 pt-2">TESTIMONIALS</h3>
        <p class="relative text-gray-700 mt-8 text-[1.111rem]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <TestimonialCard
          image="/image/testimonials/testimonials-1.jpg"
          name="John Larson"
          role="Entrepreneur"
          text="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
        />
        <TestimonialCard
          image="/image/testimonials/testimonials-2.jpg"
          name="Sara Williams"
          role="Designer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
        />
        <TestimonialCard
          image="/image/testimonials/testimonials-3.jpg"
          name="Michael Brown"
          role="Developer"
          text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi."
        />
        <TestimonialCard
          image="/image/testimonials/testimonials-4.jpg"
          name="Emily Clark"
          role="Marketing Head"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <TestimonialCard
          image="/image/testimonials/testimonials-5.jpg"
          name="David Smith"
          role="Product Manager"
          text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from '@/components/TestimonialCard.vue'
</script>
