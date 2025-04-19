/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				P_card: "rgba(var(--project_bg_card))",
				L_bg: "rgba(var(--layout_bg))",
				Bt_bg: "rgba(var(--bt_bg))",
				Title_color: "rgba(var(--title_color))",
				Subtitle_color: "rgba(var(--subtitle_color))",
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