import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use different base paths for development and production
  base: process.env.NODE_ENV === 'production' ? '/RACATOMSITE/' : '/',
  build: {
    outDir: 'docs', // match GitHub Pages source (main/docs)
    emptyOutDir: true,
  },
  plugins: [
    react(),
    {
      name: 'remove-crossorigin',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml(html) {
        // Remove crossorigin attribute from script and link tags (causes CORS issues on GitHub Pages)
        return html.replace(/ crossorigin/g, '');
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
