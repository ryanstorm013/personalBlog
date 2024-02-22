import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve, dirname } from 'path';
import { fileURLToPath  } from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personalBlog",
  plugins: [react()],
  pages: {
    index: {
      entry: 'main.jsx',
      template: 'index.html',
      filename: 'index.html'
    },
    about: {
      entry: './src/components/AboutPage/AboutPage.jsx',
      template: './src/components/AboutPage/about.html',
      filename: 'about.html'
    }
  }
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       about: resolve(__dirname, 'about', 'index.html')
  //     }
  //   }
  // }
});
