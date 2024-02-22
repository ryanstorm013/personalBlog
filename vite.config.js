import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personalBlog",
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, './src/components/HomePage/HomePage.jsx')
  //     }
  //   }
  // }
});
