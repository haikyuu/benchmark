import { imba } from 'vite-plugin-imba';
import { defineConfig } from 'vite';
import GithubActionsReporter from 'vitest-github-actions-reporter-temp'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [imba(), react()],
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		benchmark: {
			include: ["**/*.{bench,benchmark}.{imba,js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
			includeSource: ['src/**/*.{imba,js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		},
		globals: true,
		include: ["**/*.{test,spec}.{imba,js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		includeSource: ['src/**/*.{imba,js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		environment: "jsdom",
		setupFiles: ["./test/setup.imba"],
		reporters: process.env.GITHUB_ACTIONS
			? new GithubActionsReporter()
			: 'default'
	},
});
