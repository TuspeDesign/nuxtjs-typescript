module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
	plugins: [],
	rules: {
		'vue/no-v-html': 0,
		'node/handle-callback-err': 0,
		'vue/valid-attribute-name': 0,
		'vue/first-attribute-linebreak': 0,
		'vue/html-closing-bracket-newline': 0,
		'vue/multi-word-component-names': 0,
		'import/no-named-as-default-member': 0,
	},
}
