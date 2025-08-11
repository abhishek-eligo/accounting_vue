/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// import '@fontsource/inter/variable.css'
// Plugins
import { registerPlugins } from "@/plugins";

import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Vue router
import router from "./router";

// Styles
import "unfonts.css";

// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// PrimeVue
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

// Custom Css
import "@/main.css";

import { Icon } from '@iconify/vue';


const app = createApp(App);

app.component('Icon', Icon);

app.use(router);

// make the helper globally available
app.config.globalProperties.$renderTablerIcon = renderTablerIcon;

// Use Primevue
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// Use Tostify
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right",
});


registerPlugins(app);

app.mount("#app");
