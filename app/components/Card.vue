<script setup>
defineProps({
  icon: { type: String, default: "" },
  image: { type: String, default: "" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  bg: { type: String, default: "bg-white" },
  height: { type: String, default: "h-56" },
  imageCover: { type: Boolean, default: false }
});
</script>
<template>
  <div
    :class="[bg, height, 'shadow-lg cursor-pointer flex flex-col items-center text-center relative group']"
    data-aos="fade-up"
  >
    <!-- Icon or Image -->
    <div v-if="icon" class="text-green-500 mb-4 text-4xl">
      <i :class="icon"></i>
    </div>
    <div v-else-if="image" class="relative w-full flex-grow h-full">
  <img
    :src="image"
    alt="Card Image"
    :class="imageCover ? 'absolute inset-0 w-full h-full object-cover rounded-none' : 'w-16 h-16 object-contain mx-auto relative'"
  />
</div>


    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-600 mb-2">{{ title }}</h3>

    <!-- Description -->
    <p class="text-gray-600 text-sm">{{ description }}</p>

    <!-- Named slot for portfolio overlay or any extra content -->
    <slot name="info"></slot>
  </div>
</template>


