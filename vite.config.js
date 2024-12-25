import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Folder output
    },
    server: {
        host: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    base: './', // Tambahkan ini jika hosting dalam sub-folder
});