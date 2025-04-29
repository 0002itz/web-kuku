import { Children } from 'react'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				BT_menu_color: "rgba(var(--bt_menu))",
				Colab_card_color: "rgba(var(--colab_card_color))",
				P_card_color: "rgba(var(--project_bg_card))",
				Border_card: "rgba(var(--border_card))",
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
				},
				'.theme-switch': {
					heigth: '50px',
					width: '25px',
					padding: '0px',
					'border-radius': '50%',
					'justify-content': 'center',
					display: 'flex',
					position: 'fixed',
					top: '8px',
					right: '50px',
				},
				'.theme-switch svg': {
					fill: 'var(--title_color)'
				},
				'.theme-switch svg:last-child': {
					display: 'none;'
				},
				'.dark .theme-switch svg:first-child': {
					display: 'none;'
				},
				'.dark .theme-switch svg:last-child': {
					display: 'block;'
				},
			};
			addUtilities(newUtilities)
		},
	],
};