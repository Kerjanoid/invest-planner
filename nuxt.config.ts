import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vitejs/plugin-vue"],
  vite: {
    vue: {
      customElement: true,
    },
    plugins: [eslintPlugin()],
  },
});
