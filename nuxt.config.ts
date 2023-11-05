import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/devtools", "@nuxt/ui", "@vitejs/plugin-vue"],
  devtools: { enabled: true },
  vite: {
    vue: {
      customElement: true,
    },
    plugins: [eslintPlugin()],
  },
});
