<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
>>>>>>> b56a0027fdee552404138a62fc13120c861f5098
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [tailwindcss(), react()],
});
=======
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
>>>>>>> b56a0027fdee552404138a62fc13120c861f5098
