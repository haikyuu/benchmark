import { imba } from 'vite-plugin-imba';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [imba(), react()],
	define: {
		'import.meta.vitest': 'undefined',
	}
});
