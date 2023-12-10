import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

//vite (correr en desarrollo, en un servidor local)
//vite build (un compilado ./dist)
//vite preview (Levanta un servidor local pero con el compilado de ./dist)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  }
})
