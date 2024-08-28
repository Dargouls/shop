import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		extend: {
			width: {
				'sidebar-width': 'var(--sidebar-width)',
				'container-width': 'calc(100% - var(--sidebar-width))',
			},
			margin: {
				'sidebar-width': 'var(--sidebar-width)',
			},
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					100: 'var(--color-primary-100)',
					200: 'var(--color-primary-200)',
					300: 'var(--color-primary-300)',
					400: 'var(--color-primary-400)',
					500: 'var(--color-primary-500)',
					600: 'var(--color-primary-600)',
					700: 'var(--color-primary-700)',
					800: 'var(--color-primary-800)',
					900: 'var(--color-primary-900)',
					1000: 'var(--color-primary-1000)',
				},
				secondary: {
					DEFAULT: 'var(--color-secondary)',
				},
				base: 'var(--color-base)',
				'product-card': 'var(--color-product-card)',
				green: 'var(--color-green)',
				red: 'var(--color-red)',
				yellow: 'var(--color-yellow)',
				'contrast-full': 'var(--color-contrast-full)',
				'base-contrast': 'var(--color-base-contrast)',
				'font-base': 'var(--color-font-base)',
				'gradient-filter': 'var(--color-gradient-filter)',
				'bar-success': 'var(--color-bar-success)',
				link: 'var(--color-link)',
			},
			boxShadow: {
				sweet: 'var(--shadow-primary)',
			},
			zIndex: {
				infinity: '9999',
			},
			borderRadius: {
				'2-5xl': '1.25rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		function ({ addBase, theme }: any) {
			addBase({
				h1: { fontSize: '2.936rem', fontWeight: theme('fontWeight.semibold') },
				h2: { fontSize: '2.243rem', fontWeight: theme('fontWeight.semibold') },
				h3: { fontSize: '1.1713rem', fontWeight: theme('fontWeight.semibold') },
				h4: { fontSize: '1.309rem', fontWeight: theme('fontWeight.semibold') },
			});
		},
		function ({ addVariant }: any) {
			addVariant('child', '& > *');
			addVariant('child-hover', '&:hover > *');
		},
	],
} satisfies Config;

export default config;
