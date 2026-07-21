import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD:Profile/Profile/vite.config.js
  plugins: [react(), tailwindcss()],
  base: '/portfolio/', 
})
=======
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  
})
>>>>>>> 7719e4f9048e0c752897446f61b4b728185210cd:vite.config.js
