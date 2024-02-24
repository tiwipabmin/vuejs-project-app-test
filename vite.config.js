import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [vue()],
    server: {
      host: process.env.VITE_APP_HOSTNAME || 'localhost',
      port: 8080,
      proxy: {
        '/api': {
          target: process.env.VITE_APP_DEV_API_TARGET,
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: process.env.VITE_APP_BUILD_OUTDIR,
      assetsDir: 'static/vue',
      emptyOutDir: true,
    },
  })
}
