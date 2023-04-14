import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 6900,
    headers:{
    // "X-Frame-Options": "ALLOW-FROM http://localhost:8080",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    // "Content-Type": "application/json; charset=utf-8",
    }
  },
  plugins: [react()],
})
