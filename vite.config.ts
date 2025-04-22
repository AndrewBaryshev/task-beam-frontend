import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@atoms': '/src/atoms',
      '@molecules': '/src/molecules',
      '@organisms': '/src/organisms',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
    },
  },
  plugins: [react()],
});
