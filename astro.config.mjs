// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            host: '0.0.0.0',
            port: 4321,
            allowedHosts: [
                'dev.curso-astro.com',
            ],
        },
    },
    integrations: [tailwind(), react()],
});