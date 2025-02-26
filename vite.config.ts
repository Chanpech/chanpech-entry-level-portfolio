import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import injectHTML  from "vite-plugin-html-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    injectHTML(),
  ],

  /* Shadcn Ui */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
