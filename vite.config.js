import { defineConfig } from 'vite';

export default defineConfig({
  base: '/e-portfolio/',
  build: {
    minify: 'terser',
    sourcemap: false
  }
});
