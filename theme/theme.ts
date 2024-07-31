import { definePreset } from '@primevue/themes'

import Aura from '@primevue/themes/aura'

export const AppTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#727e9a',
      100: '#5a688a',
      200: '#425279',
      300: '#2b3d68',
      400: '#234599',
      500: '#142858',
      600: '#12244f',
      700: '#102046',
      800: '#0e1c3d',
      900: '#0c1834',
      950: '#0a142c',
    },
  },
})
