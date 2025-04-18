/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				P_card: "rgba(var(--p_card_bg))",
				L_bg: "rgba(var(--l_bg))",
				Bt_bg: "rgba(var(--bt_bg))",
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