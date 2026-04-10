import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Custom domain raca.com.au — serve from root
  base: '/',
  build: {
    outDir: 'docs', // match GitHub Pages source (main/docs)
    emptyOutDir: true,
    // Optimize images and assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    rollupOptions: {
      output: {
        // Better chunk splitting for images
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
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
  // Optimize serving of static files
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600'
    }
  }
});
