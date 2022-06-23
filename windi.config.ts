import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
	/**
	 * Write windi classes in html attributes.
	 * @see https://windicss.org/features/attributify.html
	 */
	attributify: true,
	theme: {
		extend: {
			screens: {
				sm: '380px',
				md: '768px',
			},
			maxWidth: {
				sm: '380px',
				md: '768px',
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				link: 'var(--link)',
				buttonBG: 'var(--buttonBG)',
				button: 'var(--button)',
				light: 'rgba(255 255 255 / 87%)',
				gray1: 'rgb(32, 33, 34)',
				gray2: 'rgb(42, 42, 45)',
			},
		},
		fontWeight: {
			semi: 500,
			bold: 700,
		},
	},
	preflight: false,
	fontFamily: false,
})
