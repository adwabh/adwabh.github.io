import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.tsx';
import './index.css';

// Export for SSG build
export const createRoot = ViteReactSSG(
  { routes },
  () => {
    // app bootstrapped by ViteReactSSG
  },
)