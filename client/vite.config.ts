import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://tailwindcss.com/docs/installation/using-vite
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  root: resolve(__dirname, './'),
  publicDir: resolve(__dirname, './public'),
  build: {
    outDir: resolve(__dirname, '../dist/client')
  }
})


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),     
//     tailwindcss(),
//   ],
// >>>>>>> main
// })
