export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    ['@nuxtjs/tailwindcss', {
      config: {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Poppins', 'sans-serif'],
            },
          },
        },
      }
    }],
    '@nuxt/eslint'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      link: [
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon/web-app-manifest-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/web-app-manifest-192x192' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon/favicon-48x48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'style', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap' },
        { rel: 'preload', as: 'font', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2' },
        { rel: 'preload', as: 'font', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2' },
        { rel: 'preload', as: 'font', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2' }
      ]
    }
  },
})