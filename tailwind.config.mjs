/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".slider img:not(img: first - child)": {
					display: "none;"
				},
				".expouse_first_img": {
				},
			};
			addUtilities(newUtilities)
		},
	],
}
