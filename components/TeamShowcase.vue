<template>
  <SectionWrapper tag="section" class="bg-[#191b21]">
    <h2 class="text-white text-2xl font-semibold mb-5">Prepared by industry experts</h2>
    <p class="text-xl mb-6 md:mb-8 lg:mb-16">Meet our Team behind our intelligence insights.</p>

    <AppCarousel :slides="teamMembers" class="mb-8" :space-between="30">
      <template
        v-for="(_, idx) in teamMembers"
        :key="idx"
        #[`slide-${idx}`]="{ slide }"
      >
        <TeamMemberCard :member="slide" />
      </template>
    </AppCarousel>
  </SectionWrapper>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Sylwester Majewski',
    image: '/images/team/sylwester-majewski.jpg',
    bio: 'A graduate of the Warsaw School of Economics, Sylwester received an MA specializing in finance and banking. As Finance Magnates\' research associate and STA certified analyst, he leaves no stone unturned. Sylwester is the previous minority partner of an NFA registered US forex broker, and since 2003, has participated in many forex projects.'
  },
  {
    name: 'Ramzi Ahmad',
    image: '/images/team/ramzi-ahmad.jpg',
    bio: 'With over 16 years of experience in data-driven marketing within the financial industry, Ramzi Ahmad has developed expertise across Fintech, Crypto, Payments, and Online Trading markets. He has led teams to improve efficiency and drive growth for dozens of financial brands through actionable data insights. Ramzi continues to advance his skills through courses at institutions like Harvard and Cambridge, ensuring the highest standards of data accuracy.'
  },
  {
    name: 'Damian Chmiel',
    image: '/images/team/damian-chmiel.jpg',
    bio: 'Damian\'s adventure with the financial markets began at the University of Economics, where obtained his MA in finance and accounting. Starting from the retail trader perspective, he collaborated with brokerage houses and financial portals in Poland as an independent editor and content manager. His adventure in Finance Magnates began in 2016 where he develops as a business intelligence analyst.'
  }
]
</script>
