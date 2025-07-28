/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as labs from 'vuetify/labs/components'

// Vuetify core
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Removed Tabler icon set import

export default createVuetify({
  components: {
    ...labs
  },
  directives,
  icons: {
    defaultSet: 'mdi', // keep mdi as default
    aliases: {
      ...aliases,
    },
    sets: {
      mdi,         // built-in
      // tabler: tablerIconSet,  // custom (removed)
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2196f3',
          secondary: '#f5f5f5',
          background: '#f5f5f5',
        },
      },
    },
  },
})
