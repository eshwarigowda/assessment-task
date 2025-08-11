<script setup>

import Hero from '~/components/Hero.vue'
import Navbar from '~/components/Navbar.vue'
import Aboutstats from '~/components/Aboutstats.vue';

import Service from '~/components/Service.vue';
import Portfolio from '~/components/Portfolio.vue';
import TestimonialsSection from '~/components/TestimonialsSection.vue';
import Calltoaction from '../components/Calltoaction.vue';
import Team from '~/components/Team.vue';
import Contact from '~/components/Contact.vue';
import Newsletter from '~/components/Newsletter.vue';
import Footer from '~/components/Footer.vue';
import Scrollup from '~/components/Scrollup.vue';
</script>

<template>
  <Scrollup />
  <Navbar />
  <Hero />
  <Aboutstats />
  <Service />
  <Portfolio />
  <TestimonialsSection />
  <Calltoaction />
  <Team />
  <Contact />
  <Newsletter />
  <Footer />
   
</template>

