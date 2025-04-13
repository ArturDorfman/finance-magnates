<template>
  <AppCarousel :slides="slides" :loop="false" :pagination="false">
    <template
      v-for="(_, idx) in slides"
      :key="idx"
      #[`slide-${idx}`]="{ slide }"
    >
      <div
        class="aspect-video p-4 relative"
        :class="{ 'bg-gradient-to-b from-black to-[#0f26ae]': idx % 2 === 0 }"
      >
        <img
          :src="slide.src"
          :alt="slide.title"
          class="w-full h-full object-contain relative z-10"
        >

        <div
          v-if="idx % 2 !== 0"
          class="gradient-orb-secondary absolute rounded-full blur-xl
          left-[12%] top-[70%] w-[300px] h-[234px]"
        />
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

<style scoped>
.gradient-orb-secondary {
  background: radial-gradient(
    circle at center,
    rgb(96 165 250 / 1) 0%,
    rgb(59 130 246 / 0.6) 25%,
    rgb(59 130 246 / 0.3) 45%,
    rgb(59 130 246 / 0.1) 60%,
    transparent 100%
  );
}
</style>
