<template>
  <AppCarousel :slides="slides" :loop="false">
    <template
      v-for="(_, idx) in slides"
      :key="idx"
      #[`slide-${idx}`]="{ slide }"
    >
      <div class="aspect-video p-4 bg-gradient-to-b from-black to-[#0f26ae]">
        <img
          :src="slide.src"
          :alt="slide.title"
          class="w-full h-full object-contain"
        >
      </div>
    </template>
  </AppCarousel>
</template>

<script setup>
const slides = [
  {
    src: '/images/regulatory-1.png',
    title: 'Slide 1',
    description: 'This is the first slide'
  },
  {
    src: '/images/regulatory-2.png',
    title: 'Slide 2',
    description: 'This is the second slide'
  },
  {
    src: '/images/regulatory-3.png',
    title: 'Slide 3',
    description: 'This is the third slide'
  }
]
</script>
