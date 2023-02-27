import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import analyze from "rollup-plugin-analyzer";
import { visualizer } from 'rollup-plugin-visualizer';

//
// yarn build --mode analyze
//
// https://zenn.dev/manalink_dev/articles/vite-bundle-analyzer

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
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
          plugins: [
            analyze(),
            mode === 'analyze' && visualizer({
              open: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              brotliSize: true,
            })
          ],
        },
      },
    },
  /*  optimizeDeps: {
      include: ["qrcode"],
    },*/
    plugins: [vue()],
  }
})
