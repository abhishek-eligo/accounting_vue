// Plugins
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import Fonts from "unplugin-fonts/vite";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    AutoImport({
      imports: ["vue"], // Auto import `ref`, `reactive`, `defineProps`, etc.
      dts: "src/auto-imports.d.ts", // optional: generates TS typings
      dirs: [
        "src/helpers", // Auto import from helpers
        "src/validations", // Auto import from validations
        "src/pages", // Auto import from pages,
        "src/components", // Auto import from components,
        "src/plugins", // Auto import from plugins,
        "src/router", // Auto import from router,
      ],
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components({
      dirs: ["src/components"], // Scan this directory
      deep: true,               // Scan subfolders recursively
      extensions: ["vue"],      // Only .vue files
      dts: "src/components.d.ts", // (optional) generate TS typings for auto-imported components
    }),
    Fonts({
      fontsource: {
        families: [
          {
            name: "Roboto",
            weights: [100, 300, 400, 500, 700, 900],
            styles: ["normal", "italic"],
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["vuetify"],
  },
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler",
      },
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    lib: {
      entry: "src/main.js",
      name: "VuetifyAccountingDummy",
      fileName: (format) => `vuetify-accounting-dummy.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vuetify"],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
        },
      },
    },
  },
});
