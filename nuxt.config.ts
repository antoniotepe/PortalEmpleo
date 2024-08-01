import { AppTheme } from './theme/theme.js'

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
  runtimeConfig: {
    apiUrl: process.env.API_URL,
  },
  primevue: {
    options: {
      theme: {
        preset: AppTheme,
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
        files: [
          { path: 'es/index.json' },
          { path: 'es/ui.json' },
          { path: 'es/login.json' },
          { path: 'es/register.json' },
          { path: 'es/companies.json' },
          { path: 'es/patents.json' },
          { path: 'es/location.json' },
          { path: 'es/contact.json' },
          { path: 'es/password.json' },

          { path: 'es/branches.json' },

          { path: 'es/profile.json' },
          { path: 'es/legalRepresentation.json' },
          { path: 'es/rerit.json' },
          { path: 'es/collaborators.json' },
          { path: 'es/toolbar.json' },
        ],
      },
    ],
  },
})
