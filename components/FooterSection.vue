<template>
  <footer class="bg-[#0A0B0D] px-4 md:px-16 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8">
      <!-- Logos -->
      <div
        class="col-span-full lg:col-span-3
        flex flex-col md:flex-row lg:flex-col justify-between lg:justify-start gap-12"
      >
        <img
          src="/icons/fmintelligence-footer-logo.svg"
          alt="FM Intelligence"
          class="w-[195px]"
        >

        <img
          src="/icons/finance-magnates-logo.svg"
          alt="Finance Magnates"
          class="w-[172px]"
        >
      </div>

      <!-- Description -->
      <div class="md:col-span-2 lg:col-span-6">
        <p class="text-lg leading-relaxed">
          Finance Magnates Intelligence, part of Finance Magnates, delivers specialized research
          and insights on the financial markets. Offering Quarterly, Annual, and custom reports
          tailored to specific business needs, it covers key aspects such as trading volumes,
          market trends, regulations, and more
        </p>

        <div class="flex space-x-[18px] mt-6">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.url"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-8 h-8 p-1.5 text-white"
          >
            <Icon :name="social.icon" class="w-full h-full" />
          </NuxtLink>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="md:col-span-1 lg:col-span-3 flex justify-end">
        <ul class="space-y-2">
          <li
            v-for="link in navigationLinks"
            :key="link.text"
            class="text-lg"
          >
            <NuxtLink
              :to="link.url"
              class="hover:text-white transition-colors"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Bottom Section -->
    <div class="mt-12 flex flex-col lg:flex-row lg:justify-between">
      <p class="text-sm mb-3">© 2024 "Finance Magnates CY Ltd." All rights reserved.</p>

      <div class="flex flex-wrap gap-x-6 gap-y-1 text-sm">
        <NuxtLink
          v-for="policy in policies"
          :key="policy.text"
          :to="policy.url"
          class="hover:text-white transition-colors text-xs underline"
        >
          {{ policy.text }}
        </NuxtLink>
      </div>
    </div>

    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
      <div class="lg:col-span-6">
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-2xl font-light">fmintelligence</h2>
            <div class="border border-white inline-block px-4 py-2">
              <h3 class="text-sm tracking-wider">FINANCE MAGNATES</h3>
            </div>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed max-w-xl">
            Finance Magnates Intelligence, part of Finance Magnates, delivers specialized research
            and insights on the financial markets. Offering Quarterly, Annual, and custom reports
            tailored to specific business needs, it covers key aspects such as trading volumes,
            market trends, regulations, and more
          </p>

          <div class="flex space-x-4 mt-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3 md:justify-self-end">
        <nav>
          <ul class="space-y-2">
            <li v-for="link in navigationLinks" :key="link.text">
              <NuxtLink :to="link.url" class="text-gray-400 hover:text-white transition-colors">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div> -->

    <!-- Bottom Section -->
    <!-- <div class="mt-12 pt-8 border-t border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-sm text-gray-400">
          © 2024 "Finance Magnates CY Ltd." All rights reserved.
        </p>
        <div class="flex flex-wrap gap-4 text-sm">
          <NuxtLink
            v-for="policy in policies"
            :key="policy.text"
            :to="policy.url"
            class="text-gray-400 hover:text-white transition-colors">
            {{ policy.text }}
          </NuxtLink>
        </div>
      </div>
    </div> -->
  </footer>
</template>

<script setup>
const socials = [
  { name: 'Twitter', url: '#', icon: 'i-simple-icons-twitter' },
  { name: 'Telegram', url: '#', icon: 'i-simple-icons-telegram' },
  { name: 'YouTube', url: '#', icon: 'i-simple-icons-youtube' },
  { name: 'Facebook', url: '#', icon: 'i-simple-icons-facebook' },
  { name: 'LinkedIn', url: '#', icon: 'i-simple-icons-linkedin' },
  { name: 'RSS', url: '#', icon: 'i-simple-icons-rss' }
]

const navigationLinks = [
  { text: 'Finance Magnates', url: '/' },
  { text: 'Latest News', url: '/news' },
  { text: 'Directory', url: '/directory' },
  { text: 'Events', url: '/events' },
  { text: 'Contact Us', url: '/contact' }
]

const policies = [
  { text: 'Cookie Policy', url: '/cookie-policy' },
  { text: 'Privacy Policy', url: '/privacy-policy' },
  { text: 'Terms and Conditions', url: '/terms' },
  { text: 'Manage Cookies', url: '/manage-cookies' }
]
</script>
