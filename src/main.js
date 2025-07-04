/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// import '@fontsource/inter/variable.css'
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Vue router
import router from './router'

// Styles
import 'unfonts.css'

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Import all Tabler icons
import * as TablerIcons from '@tabler/icons-vue'

// Custom Css
import '@/main.css'

const app = createApp(App)

app.use(router)

// Register Tabler icons globally
for (const [key, component] of Object.entries(TablerIcons)) {
  app.component(key, component)
}

registerPlugins(app)

app.mount('#app')
