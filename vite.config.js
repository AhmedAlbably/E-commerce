import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",  // ✅ Ensures Tailwind scans JSX files
  ],
  theme: {
    extend: {},
  },
  
})



