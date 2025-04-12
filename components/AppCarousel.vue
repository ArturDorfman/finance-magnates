<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        class="flex items-center justify-center"
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
  }
})

const containerRef = useTemplateRef('containerRef')

useSwiper(containerRef, {
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
  }
})
</script>
