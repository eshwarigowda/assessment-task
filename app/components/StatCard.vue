<template>
  <div class="text-center">
    <h3 class="value text-5xl font-bold text-green-600">{{ animatedValue }}</h3>
    <p class="label text-gray-500 mt-2 whitespace-nowrap">{{ label }}</p>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  label: { type: String, required: true },
  duration: { type: Number, default: 4000 }
})

const animatedValue = ref(0)
const frameRate = 60
const totalFrames = Math.round((props.duration / 1000) * frameRate)

onMounted(() => {
  let frame = 0
  const counter = setInterval(() => {
    frame++
    const progress = frame / totalFrames
    animatedValue.value = Math.round(props.value * progress)
    if (frame === totalFrames) clearInterval(counter)
  }, 1000 / frameRate)
})
</script>
