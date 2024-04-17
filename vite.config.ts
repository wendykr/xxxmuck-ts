import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  plugins: [react()],
  base: "/xxxmuck-ts"
})

