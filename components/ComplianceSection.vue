<template>
  <section class="relative overflow-hidden">
    <div class="px-4 py-8 md:px-16 md:py-16">
      <header class="mb-6 relative">
        <NuxtLink to="/">
          <img
            src="/icons/fmintelligence-logo.svg"
            alt="FM Intelligence"
            class="h-8 my-1.5"
          >
        </NuxtLink>
      </header>

      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16 relative">
        <div class="grow mb-6 md:mb-[54px] relative z-10">
          <h1 class="text-3xl md:text-5xl xl:text-6xl font-semibold text-white mb-6 md:mb-9">
            Stay Informed.<br>
            Stay Compliant.
          </h1>

          <p class="max-w-[660px] text-gray-300 text-base md:text-xl leading-normal">
            Sign up to access the latest Insights on Regulatory Highlights,
            Recent Developments, and Future Outlook—all in one monthly report.
          </p>
        </div>

        <div class="md:px-8 lg:px-0 relative">
          <ComplianceForm class="max-w-[576px] relative z-10 opacity-100" />

          <!-- First gradient orb -->
          <div
            class="gradient-orb-primary absolute rounded-full blur-lg
            left-[-60%] top-[-15%] w-[500px] h-[700px]
            md:left-[-35%] md:top-[-30%] md:w-[800px] md:h-[800px]
            lg:left-[-40%] lg:top-[-35%]
            "
          />

          <!-- Second gradient orb -->
          <div
            class="gradient-orb-secondary absolute rounded-full blur-lg
            left-[25%] bottom-[-10%] w-[385px] h-[385px]
            md:left-[20%] md:bottom-[-15%] md:w-[600px] md:h-[500px]
          "
          />
        </div>
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
