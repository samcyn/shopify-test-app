<script setup lang="ts">
  import { onMounted } from 'vue';
	import { AppProvider } from '@ownego/polaris-vue';
	import locales from '@ownego/polaris-vue/dist/locales/en.json';

  import NavMenuItem from '@/components/shared/NavMenuItem/index.vue';
	import AppSideBar from '@/components/layouts/AppSideBar/index.vue';
	import AppMainContent from '@/components/layouts/AppMainContent/index.vue';

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
		<nav-menu-item to="/about" title="About" />
		<nav-menu-item to="/settings" title="Settings" />
	</ui-nav-menu>
	<AppProvider :i18n="locales" class="app_provider">
		<main class="wrapper">
			<!-- Sidebar -->
			<app-side-bar />
			<!-- Main Content -->
			<app-main-content />
		</main>
	</AppProvider>
</template>

<style lang="css" scoped>
.app_provider {
	overflow: hidden;
	height: 100%;
	width: 100%;
}
.wrapper {
	overflow: hidden;
	height: 100%;
	background-color: #f1f2f4;
	display: flex;
}
</style>
