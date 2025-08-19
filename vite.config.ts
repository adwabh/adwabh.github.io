import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages user site (adwabh.github.io), base should be '/'
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssr: {
    // Ensure proper client entry for SSG
    noExternal: ['vite-react-ssg'],
  },
  build: {
    // Ensure proper asset handling
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure JavaScript files have .js extension
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name || '')) {
            return `assets/[name]-[hash].${ext}`;
          }
          if (/\.(js)$/.test(assetInfo.name || '')) {
            return `assets/[name]-[hash].js`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },
});
