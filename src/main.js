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
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";
// axios
import axiosPlugin from "./plugins/axios";

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

// Custom Css
import "@/main.css";

import { Icon } from '@iconify/vue';
import * as TablerIcons from '@tabler/icons-vue'


const app = createApp(App);

app.component('Icon', Icon);

app.use(router);

app.use(axiosPlugin);

// make the helper globally available
app.config.globalProperties.$renderTablerIcon = renderTablerIcon;

// Register all Tabler icons globally
for (const [key, component] of Object.entries(TablerIcons)) {
  app.component(key, component)
}

// Use Tostify
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right",
});


registerPlugins(app);

app.mount("#app");
