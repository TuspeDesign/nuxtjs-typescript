<template>
	<div class="text-center mx-auto max-w-screen-sm">
		<h1>{{ title }}</h1>
		<p>
			Pahoittelut, että päädyit tälle sivulle sen sijaan, että olisit
			löytänyt mitä alunperin etsit. Olemme päivittäneet verkkosivustoa,
			joten virhe saattaa johtua siitä.
		</p>
		<p>
			<button
				@click="reload"
				class="button bg-primary text-white py-1 px-6 border-0"
			>
				Etusivulle
			</button>
		</p>
	</div>
</template>

<script>
	export default {
		layout: "default",
		props: ["error"],
		data() {
			return {
				title: null,
			};
		},
		mounted() {
			this.title =
				this.error.statusCode === 404
					? "Sivua ei löytynyt"
					: "Virhe " + this.error.statusCode;
		},
		methods: {
			reload() {
				window.location.replace("/");
			},
		},
		head() {
			return {
				htmlAttrs: { lang: "en" },
				title: "Error " + this.error.statusCode + " | " + this.title,
			};
		},
	};
</script>
