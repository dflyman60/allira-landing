import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,        // change this to whatever you want
    strictPort: false  // will auto-pick next port if busy
  }
})
