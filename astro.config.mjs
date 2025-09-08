// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue'; // Import vue
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

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
		plugins: [
			Icons({
				compiler: 'vue3',
				customCollections: {
					'custom': FileSystemIconLoader('./src/assets/icons', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
				},
			}),
		],
	},
	integrations: [
		tailwind(),
		react(),
		vue(),
	],
});
