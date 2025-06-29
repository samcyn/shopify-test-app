<script setup lang="ts">
  import { onMounted } from 'vue';
	import { AppProvider } from '@ownego/polaris-vue';
	import locales from '@ownego/polaris-vue/dist/locales/en.json';

  import NavMenuItem from '@/components/shared/NavMenuItem/index.vue';


	onMounted(() => {

		// shopify.webVitals.onReport(callback);
		// shopify.ready(callback);
	});
</script>

<template>
	<ui-nav-menu>
		<nav-menu-item to="/" rel="home" title="Home" />
		<nav-menu-item to="/about" title="About" />
		<nav-menu-item to="/settings" title="Settings" />
	</ui-nav-menu>
	<AppProvider :i18n="locales">
		<router-view />
	</AppProvider>
</template>
