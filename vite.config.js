import { defineConfig } from 'vite'
import path from 'path'
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import';

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      prodUrl: 'https://cdn.jsdelivr.net/npm/{name}@{version}/{path}',
      modules: [
        autoComplete('vue'),
        {
          name: 'bootstrap',
          var: 'bootstrap', 
          version: '5.3.1',
          path: 'dist/js/bootstrap.min.js',
          css: 'dist/css/bootstrap.min.css'
        },
        {
          name: 'bootstrap-icons',
          var: 'bootstrap-icons/font/bootstrap-icons.css', 
          version: '1.10.5',    
          path: [],      
          css: 'font/bootstrap-icons.min.css'
        }
      ]
    }),
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      // '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons')
    }
  },
})
