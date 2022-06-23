export default {
	target: 'server',
	server: {
		port: 3000,
	},
	ssr: true,
	head: {
		link: [
			{ rel: 'preconnect', href: 'https://sportti.org' },
		],
		title: 'Dataline Sport',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:locale', content: 'fi_FI' },
			{ name: 'twitter:creator', content: '@_timoanttila' },
		],
	},
	css: ['@/assets/global.css'],
	plugins: ['@/plugins/vue-observe-visibility.js'],
	components: true,
	buildModules: ['@nuxt/typescript-build', 'nuxt-windicss', '@nuxtjs/toast'],
	modules: ['@nuxtjs/axios', '@nuxt/image'],
	publicRuntimeConfig: {
		axios: {
			baseURL: 'https://sportti.org/fcktp/',
		},
	},
	image: {
		domains: ['sportti.org', 'cdn.torneopal.net'],
		quality: 100,
		format: 'webp',
		staticFilename: '[publicPath]/images/[name]-[hash][ext]'
	},
	toast: {
		position: 'top-center',
	}
}
