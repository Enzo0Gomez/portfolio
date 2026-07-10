import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()],
  base: '/portfolio/', 
})
=======
  plugins: [react()],
  plugins: [tailwindcss()],
})

>>>>>>> ecc8ce6a67a1bbf45e0209e603c61c0dc7e13131
