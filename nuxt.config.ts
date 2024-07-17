import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    '@nuxt/eslint',
    'nuxt-typed-router',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'light',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
      },
    },
    components: {
      prefix: 'P',
      include: '*',
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        iso: 'es-GT',
        files: [{ path: 'es/index.json' }],
      },
    ],
  },
})
