<template>
  <button
    class="w-full bg-[#1335F5] hover:bg-[#1335F5]/90 transition-colors duration-200
          text-white font-semibold py-3 px-6 rounded"
    :disabled="isSubmitting"
  >
    <slot />
  </button>
</template>
