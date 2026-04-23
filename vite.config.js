import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/giaphavuongpro/",   // 👈 QUAN TRỌNG
  plugins: [react()]
})