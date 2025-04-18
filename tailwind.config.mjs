/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				p_card: "rgba(var(--p_card_bg))",
			}
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
					'object-fit': 'cover',
				},
				'.slider img:not(img:first-child)': {
					display: 'none;'
				}
			};
			addUtilities(newUtilities)
		},
	],
};