import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'speed-insights.js',
      name: 'SpeedInsights',
      fileName: 'speed-insights.bundle',
      formats: ['iife']
    },
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
