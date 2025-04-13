<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
      >
        <slot :name="`slide-${idx}`" :slide="slide" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplayDelay: {
    type: Number,
    default: 5000
  },
  spaceBetween: {
    type: Number
  }
})

const containerRef = useTemplateRef('containerRef')

useSwiper(containerRef, {
  spaceBetween: props.spaceBetween,
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
  loop: props.loop,
  autoplay: {
    delay: props.autoplayDelay
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400]
    },
    next: {
      shadow: true,
      translate: [0, 0, -400]
    }
  },
  pagination: true
})
</script>

<style>
:root {
  --swiper-pagination-color: white;
  --swiper-pagination-bullet-inactive-color: #808080;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-horizontal-gap: 21px;
}
</style>
