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
});
