import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'analytics.js',
      name: 'Analytics',
      fileName: 'analytics',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
