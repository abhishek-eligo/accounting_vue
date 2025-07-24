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

// Tabler icons helper
import { tablerIconSet } from "@/icons/tabler";
// If you want to register specific Tabler icons globally, do it here:
// import { IconPlus, IconUser } from '@tabler/icons-vue';
// app.component('IconPlus', IconPlus);
// app.component('IconUser', IconUser);
// For dynamic usage, use tablerIconSet as a render function or provide/inject.

// Custom Css
import "@/main.css";
import "@/style.css";

const app = createApp(App);

app.use(router);

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
