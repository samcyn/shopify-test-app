<script setup>
  import { ref, onMounted, computed, onUnmounted, onBeforeMount } from 'vue';

	import { AppProvider, Link } from '@ownego/polaris-vue';
	import locales from '@ownego/polaris-vue/dist/locales/en.json';


	// const app = window.ShopifyApp;

	// if (window.AppBridge && window.AppBridge.actions) {
	// 	const { Redirect } = window.AppBridge.actions;
	// 	unsubscribeRedirect = app.subscribe(Redirect.Action.APP, (data) => {
	// 		router.replace({ path: data.path });
	// 	});
	// }

	onMounted(() => {
		console.log('onMounted', window.AppFrame);

		// shopify.webVitals.onReport(callback);
		// shopify.ready(callback);
	});
</script>

<template>
	<ui-nav-menu>
		<!-- <Link to="/" rel="home">
			Home
		</Link>
		<Link to="/about">
			About
		</Link>
		<Link to="/settings">
			Settings
		</Link> -->
		<a href="/" rel="home">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
	</ui-nav-menu>
	<AppProvider :i18n="locales">
		<router-view />
	</AppProvider>
</template>
