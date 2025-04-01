/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			slider: {
				img: "not(img:first-child){display: 'none;'}"
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				slider: {
					img: "not(img:first-child){display: 'none;'}"
				},
			};
			addUtilities(newUtilities)
		},
	],
}
