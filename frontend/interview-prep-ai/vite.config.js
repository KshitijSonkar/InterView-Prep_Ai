import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Reduce console output
    minify: true,
    // Disable chunk size warnings
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        // Split into smaller chunks to reduce output
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['react-router-dom']
        }
      }
    }
  }
})