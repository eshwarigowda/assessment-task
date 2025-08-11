<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  active: { type: Boolean, default: false },
  onToggle: { type: Function, required: true }
})
</script>

<template>
  <div
    class="flex items-start space-x-4 cursor-pointer"
    @click="onToggle"
  >
    <div
      class="p-3 rounded-full text-xl transition-colors duration-300 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white"
      :class="{ '!bg-green-500 !text-white': active }"
    >
      <i :class="icon"></i>
    </div>
    <div>
      <h4 class="font-bold text-gray-500">{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
