import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Match the GitHub Pages repo name so assets resolve correctly when hosted under /RACANEWWEBSITEJAN26/
  base: '/RACANEWWEBSITEJAN26/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
