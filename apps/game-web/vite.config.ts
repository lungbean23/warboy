import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // very important for linked workspace packages
    preserveSymlinks: true,
  },
  // keeps Vite from trying to pre-bundle these as external deps
  optimizeDeps: {
    exclude: ['@warboy/world', '@warboy/net', '@warboy/overlays', '@warboy/chat'],
  },
  ssr: {
    noExternal: ['@warboy/world', '@warboy/net', '@warboy/overlays', '@warboy/chat'],
  },
})

