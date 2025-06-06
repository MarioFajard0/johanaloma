import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "744f-2806-269-4481-9453-e047-bea-77f3-f9e7.ngrok-free.app"]
  },
})
