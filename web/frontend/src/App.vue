<script setup lang="ts">
import { onMounted } from 'vue';
import { AppProvider } from '@ownego/polaris-vue';
import locales from '@ownego/polaris-vue/dist/locales/en.json';

import NavMenuItem from '@/components/shared/NavMenuItem/index.vue';

onMounted(() => {
	// Type assertion for Shopify global object
	(window as any).shopify?.webVitals?.onReport((event: any) => {
		console.log(event);
	});
	// (window as any).shopify?.ready(() => {
	// 	console.log('shopify ready');
	// });
});
</script>

<template>
	<ui-nav-menu>
		<nav-menu-item to="/" rel="home" title="Home" />
		<nav-menu-item to="/reviews" title="Reviews (17)" />
		<nav-menu-item to="/settings" title="Settings" />
	</ui-nav-menu>
	<AppProvider :i18n="locales" class="app_provider">
		<router-view />
	</AppProvider>
</template>

<style lang="css" scoped>
.app_provider {
	/* overflow: hidden; */
	height: 100%;
	width: 100%;
  background-color: #f1f2f4;
}
</style>
