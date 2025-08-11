<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    image: '/image/testimonials/testimonials-1.jpg',
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    text:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    image: '/image/testimonials/testimonials-2.jpg',
    name: 'Sara Wilsson',
    role: 'Designer',
    text:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    image: '/image/testimonials/testimonials-3.jpg',
    name: 'Jena Karlis',
    role: 'Store Owner',
    text:
      'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    image: '/image/testimonials/testimonials-4.jpg',
    name: 'Matt Brandon',
    role: 'Freelancer',
    text:
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.”',
  },
  {
    image: '/image/testimonials/testimonials-5.jpg',
    name: 'John Larson',
    role: 'Entrepreneur',
    text:
      'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
]
</script>

<template>
  <section data-aos="fade-up" class="py-14 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5">
      <!-- Heading -->
      <div class="text-center mb-12 relative">
        <h2
          class="text-4xl sm:text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-28 sm:-mt-16 lg:-mt-20"
        >
          TESTIMONIALS
        </h2>
        <h3 class="relative text-2xl sm:text-4xl font-bold text-gray-600 pt-2">
          TESTIMONIALS
        </h3>
        <p class="relative text-gray-700 mt-6 text-base sm:text-lg max-w-3xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <!-- Swiper Carousel -->
      <Swiper
        class="mt-16 pb-28 relative z-10 overflow-visible"
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 5 }
        }"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <TestimonialCard
            :image="testimonial.image"
            :name="testimonial.name"
            :role="testimonial.role"
            :text="testimonial.text"
          />
        </SwiperSlide>
        <div class="swiper-pagination !bottom-[-20px]"></div>
      </Swiper>
    </div>
  </section>
</template>



<style>
.swiper-pagination-bullet {
  background-color: #d1d5db;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #22c55e;
}
.swiper-pagination {
  bottom: 10px !important;
  z-index: 20 !important;
  position: relative !important;
}
</style>
