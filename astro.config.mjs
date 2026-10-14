// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://josuecorreaq.com',
	trailingSlash: 'always',
	// MDX lets a note place the figure components among its prose; it inherits the markdown options.
	integrations: [mdx()],
	build: {
		inlineStylesheets: 'auto',
	},
	markdown: {
		syntaxHighlight: 'prism',
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'TASA Orbiter',
			cssVariable: '--font-tasa-orbiter',
			fallbacks: ['ui-sans-serif', 'system-ui'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/tasa-orbiter-latin.woff2'],
						weight: '400 800',
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			fallbacks: ['ui-monospace', 'monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/geist-mono-latin.woff2'],
						weight: '100 900',
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
