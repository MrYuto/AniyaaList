import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
  },
  plugins: [
    preact(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        name: 'AniyaaList',
        icon: 'https://nyaa.si/static/favicon.png',
        namespace: 'https://github.com/MrYuto',
        match: ['https://nyaa.si/view/*'],
        downloadURL:
          'https://github.com/MrYuto/AniyaaList/raw/main/dist/aniyaa-list.user.js',
        updateURL:
          'https://github.com/MrYuto/AniyaaList/raw/main/dist/aniyaa-list.user.js',
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
        },
      },
    }),
  ],
});
