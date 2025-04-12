<template>
  <InfoGrid
    tag="section"
    title="Frequently Asked Questions"
    class="bg-[#0A0B0D]"
    :items="faq"
  >
    <template #content="{ items }">
      <ul
        class="
          my-6 md:my-8 lg:my-16 grid grid-cols-1
          md:grid-cols-2 lg:grid-cols-3
          gap-y-6 md:gap-x-8 lg:gap-x-16 md:gap-y-8 lg:gap-y-16
        "
      >
        <li
          v-for="(item, index) in items"
          :key="item.title"
          :class="{
            'md:col-span-2 lg:col-span-1': index === 2
          }"
        >
          <h3 class="text-lg font-semibold mb-2 text-white">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </template>
  </InfoGrid>
</template>

<script setup>
const faq = [
  {
    title: 'How often is the Compliance Industry Report available?',
    description: 'The report is published monthly, providing regular updates to help businesses stay ahead of compliance changes.'
  },
  {
    title: 'How can I access the Monthly Compliance Industry Report?',
    description: 'Simply fill out the form on this page to get the report delivered straight to your inbox.'
  },
  {
    title: 'How is the data in the report gathered?',
    description: 'The report uses trusted sources like global regulators, industry news, expert analysis, and input from compliance professionals.'
  }
]
</script>
