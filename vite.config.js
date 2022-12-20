import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: '/src/components/build-entry.js',
      name: 'qrcode-of-this-site',
      fileName: (format) => `qrcode-of-this-site.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
        plugins: [analyze()],
      },
    },
  },
/*  optimizeDeps: {
    include: ["qrcode"],
  },*/
  plugins: [vue()],
})
