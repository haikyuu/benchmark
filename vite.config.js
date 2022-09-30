import { imba } from 'vite-plugin-imba';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [imba(), react(), svelte()],
	define: {
		'import.meta.vitest': 'undefined',
	}
});
