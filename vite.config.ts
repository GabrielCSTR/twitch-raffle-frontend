import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import vueJsx from "@vitejs/plugin-vue-jsx";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(), vue(), Pages(), vueJsx()],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: false,
    cors: true
  }
})
