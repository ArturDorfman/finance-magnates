<template>
  <div
    class="max-w-[380px] mx-auto bg-black border border-[#7b7c85]
    rounded-2xl p-[22px] md:p-8 h-[750px] flex flex-col mb-12"
  >
    <div class="overflow-hidden rounded-lg mb-4 shrink-0">
      <img
        :src="member.image"
        :alt="member.name"
        class="object-cover grayscale"
      >
    </div>

    <h3 class="text-white text-xl font-semibold mb-4 shrink-0">{{ member.name }}</h3>

    <p class="leading-relaxed overflow-y-auto">{{ member.bio }}</p>
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
})
</script>
