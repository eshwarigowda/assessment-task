<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  size: { type: String, default: 'md' },
  label: { type: String, default: 'Button' },
  iconOnly: { type: Boolean, default: false },
  iconClass: { type: String, default: '' },
  bgColor: { type: String, default: 'bg-green-600' }, // Tailwind class instead of color code
  hoverColor: { type: String, default: 'hover:bg-green-500' }
})

const isLink = computed(() => props.href && props.href.trim() !== '')

const sizeClasses = {
  sm: 'text-sm px-4 py-1.5',
  md: 'text-base px-6 py-2',
  lg: 'text-lg px-8 py-3'
}

const baseClasses =
  'text-white font-semibold rounded-full shadow-md transition duration-300 whitespace-nowrap inline-block cursor-pointer'

const buttonClass = computed(() => {
  const sizeClass = sizeClasses[props.size] || sizeClasses.md
  return `${sizeClass} ${baseClasses} ${props.bgColor} ${props.hoverColor}`
})
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? props.href : undefined"
    :type="isLink ? undefined : props.type"
    :class="buttonClass"
    @click="$emit('click', $event)"
  >
    <slot>
      <template v-if="iconOnly">
        <i :class="iconClass"></i>
      </template>
      <template v-else>{{ label }}</template>
    </slot>
  </component>
</template>
