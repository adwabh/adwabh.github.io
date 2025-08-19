import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set base path correctly for GitHub Pages when building in Actions
  base: process.env.GITHUB_ACTIONS === 'true' && (process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '')
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/`
    : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
