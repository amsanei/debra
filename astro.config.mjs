// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [{
        provider: fontProviders.local(),
        name: "Estedad",
        cssVariable: "--font-estedad",
        options: {
            variants: [{
                src: ['./src/assets/fonts/Estedad.woff2'],
            }]
        }
    }]
});