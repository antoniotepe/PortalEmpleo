import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    "@nuxt/eslint",
    'nuxt-typed-router',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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
        file: 'es.json',
      },
    ],
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
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
    directives: {
      prefix: 'p',
      include: '*',
    },
  },
});
