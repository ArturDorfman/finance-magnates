<template>
  <component :is="tag" class="px-4 py-8 md:px-16 md:py-16">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div'
  }
})
</script>

