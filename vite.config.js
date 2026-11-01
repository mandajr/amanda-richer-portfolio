import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { prerender } from './scripts/prerender.mjs';

export default defineConfig({
  plugins: [react(), prerender()],
});
