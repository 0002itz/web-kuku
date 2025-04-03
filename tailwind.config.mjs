/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {

		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.slider': {
					position: 'relative',
					overflow: 'hidden',
				},
				'.slider img': {
					position: 'absolute',
					inset: '0',
					width: '100%',
					height: '100%',
					'object-fit': 'cover',
					transition: 'transform 0.5s ease-in-out',
				},
				'.slider img:not(:first-child)': {
					transform: 'translateX(100%)',
				},
				'.slider img.active': {
					transform: 'translateX(0)',
				},
			};
			addUtilities(newUtilities)
		},
	],
};