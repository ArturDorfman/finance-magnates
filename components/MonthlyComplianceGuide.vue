<template>
  <SectionWrapper tag="section" class="bg-[#191b21]">
    <InfoGrid
      title="Your Monthly Compliance Guide"
      description="The Finance Magnates Compliance Industry Report provides an overview of key regulatory changes
      to help businesses navigate compliance challenges"
      :items="report"
    >
      <template #content="{ items }">
        <ul
          class="my-6 md:my-8 lg:my-16 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-16 md:gap-y-8 lg:gap-y-16"
          :class="contentClass"
        >
          <li
            v-for="item in items"
            :key="item.title"
          >
            <h3 class="text-lg font-semibold mb-2 text-white">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </template>

      <template #action>
        <AppButton>Get Free Report</AppButton>
      </template>
    </InfoGrid>
  </SectionWrapper>
</template>

<script setup>
import InfoGrid from './InfoGrid.vue'

const report = [
  {
    title: 'Regulatory Updates',
    description: 'Explore the latest changes from major regulators so you can adjust your operations confidently.'
  },
  {
    title: 'Key Announcements',
    description: 'Keep up with important notices and advisories that may impact your business.'
  },
  {
    title: 'Fines, Penalties & Seizures',
    description: 'Explore enforcement actions, including fines, to understand risks and stay ahead of compliance challenges'
  },
  {
    title: 'Scam Alerts',
    description: 'Protect your company by staying aware of frauds and scams making waves in the industry.'
  },
  {
    title: 'Compliance Experts Insights',
    description: 'Gain valuable perspectives from industry compliance experts from leading firms'
  },
  {
    title: 'Domestic Insurance News',
    description: 'Track shifts in domestic insurance regulations to keep your business compliant'
  }
]
</script>
