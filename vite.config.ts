import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/GameDevPage/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
