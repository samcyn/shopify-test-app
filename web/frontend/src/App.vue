<script setup lang="ts">
  import { onMounted } from 'vue';
	import { AppProvider, Card, Text, Form, FormLayout, TextField } from '@ownego/polaris-vue';
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
		<nav-menu-item to="/about" title="About" />
		<nav-menu-item to="/settings" title="Settings" />
	</ui-nav-menu>
	<AppProvider :i18n="locales" class="app_provider">
		<main class="wrapper">
			<aside class="sidebar">
				<div class="sidebar__wrapper">
					<Card>
						<div class="sidebar__top">
							<Form noValidate>
								<TextField
									type="text"
									size="medium"
									autoComplete="off"
									placeholder="Search"
								/>
							</Form>
						</div>
					</Card>
				</div>
			</aside>
			<section class="main_content">
				<div class="main_content__wrapper">
					<div class="main_content_no_margin">
						<router-view />
					</div>
				</div>
			</section>
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
.sidebar {
	width: var(--sidebar-width);
	height: 100%;
	/* background-color: red; */
	padding: 16px 5px 16px 24px;
}
.sidebar__wrapper {
	width: 100%;
	height: 100%;
	/* background-color: blue; */
}
.sidebar__top {
	margin-bottom: 4px;
}

.main_content {
	flex: 1;
	width: calc(100% - var(--sidebar-width));
	height: 100%;
	/* background-color: green; */
	padding: 16px 24px 16px 5px;
}
.main_content__wrapper {
	width: 100%;
	height: 100%;
	/* background-color: yellow; */
}
.main_content_no_margin {
	margin: 0 -24px;
}
</style>
