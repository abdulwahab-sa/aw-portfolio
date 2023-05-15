/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkGrey: '#272D37',
				mediumGrey: '#5F6D7E',
				lightGrey: '#F0F0F0',
				primaryYellow: '#facf0f',
				bgGrey: '#F0F0F0',
				skillGrey: 'rgba(153,153,153,.2)',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
