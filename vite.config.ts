import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

/**  https://vitejs.dev/config/ */ 
export default defineConfig({
  base: '/',
  plugins: [
    reactRefresh()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {}
  },
  resolve: {
    alias:{
      '@': path.join(__dirname, 'src')
    }
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true
  },
  optimizeDeps: {
    exclude: ['**/__test__/**']
  }
});
