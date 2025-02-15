import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';init

export default defineConfig({
  plugins: [react()],
  base: '/NetflixClone2025/', // <-- Add this line
});

