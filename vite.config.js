import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add Tailwind to plugins
  ],
  // Keep your base if you are deploying to GitHub, or remove it for local testing
  base: '/abishek-portfolio-vite/', 
})