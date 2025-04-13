<template>
  <component :is="tag">
    <h2 class="text-2xl md:text-4xl font-semibold mb-5 text-white">
      {{ title }}
    </h2>

    <p v-if="description" class="text-lg sm:text-xl">
      {{ description }}
    </p>

    <slot name="content" :items="items" />

    <slot name="action" />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true,
    validator: (items) => items.every(item => 'title' in item && 'description' in item)
  }
})
</script>
