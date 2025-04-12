<template>
  <section class="relative overflow-hidden -mx-4">
    <div class="relative px-4 md:p-0">
      <!-- First gradient orb -->
      <div
        class="gradient-orb-primary absolute rounded-full
          left-[-60%] top-[20%] w-[500px] h-[500px]"
      />

      <!-- Second gradient orb -->
      <div
        class="gradient-orb-secondary absolute rounded-full
          left-[25%] bottom-[-10%] w-[385px] h-[385px]"
      />

      <header class="mb-6 relative">
        <nav>
          <NuxtLink to="/">
            <img
              src="/images/fmintelligence-logo.svg"
              alt="FM Intelligence"
              class="h-8 my-1.5"
            >
          </NuxtLink>
        </nav>
      </header>

      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16 relative">
        <div class="mb-6 relative z-10">
          <h1 class="text-3xl font-semibold text-white mb-6">
            Stay Informed.<br>
            Stay Compliant.
          </h1>

          <p class="text-gray-300 text-base leading-normal">
            Sign up to access the latest Insights on Regulatory Highlights,
            Recent Developments, and Future Outlook—all in one monthly report.
          </p>
        </div>

        <ComplianceForm class="relative z-10 opacity-100" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-orb-primary {
  background: radial-gradient(
    circle at center,
    rgb(59 130 246 / 1) 0%,
    rgb(37 99 235 / 0.6) 25%,
    rgb(37 99 235 / 0.3) 45%,
    rgb(37 99 235 / 0.1) 60%,
    transparent 100%
  );
}

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
