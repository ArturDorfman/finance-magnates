<template>
  <div v-for="section in sections" :key="section.id">
    <component :is="section.component" :class="section.class" />
  </div>
</template>

<script setup>
import ComplianceSection from '~/components/ComplianceSection'
import MonthlyComplianceGuide from '~/components/MonthlyComplianceGuide'
import RegulatoryIntelligenceInsight from '~/components/RegulatoryIntelligenceInsight'

const sections = [
  {
    id: 'compliance-section',
    component: ComplianceSection
  },
  {
    id: 'monthly-compliance-guide',
    component: MonthlyComplianceGuide,
    class: 'px-4 py-8 md:px-16 md:py-16'
  },
  {
    id: 'regulatory-intelligence-insight',
    component: RegulatoryIntelligenceInsight
  }
]
</script>
