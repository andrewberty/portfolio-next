/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			keyframes: {
				'border-spin': {
					'100%': {
						transform: 'rotate(-360deg)',
					},
				},
			},
			animation: {
				'border-spin': 'border-spin 7s linear infinite',
			},
		},
		fontFamily: {
			sans: ['var(--font-geist-sans)'],
			mono: ['var(--font-geist-mono)'],
			serif: 'var(--font-dmserif)',
		},
	},
	plugins: [],
}
