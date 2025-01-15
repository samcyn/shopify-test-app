<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const loading = ref(true);
const router = useRouter()
onMounted(() => {
	// simulate api calls
	setTimeout(() => {
		loading.value = false;
	}, 2000);
});

function navigate(event) {
  const pathname = event.target.pathname
  history.pushState({}, '', pathname)
  router.replace(pathname);
}
</script>

<template>
	<ui-nav-menu>
		<a
			href="/"
			rel="home"
			@click.prevent="navigate"
			>Home</a
		>
		<a href="/dashboard" @click.prevent="navigate"
			>Dashboard</a
		>
		<a href="/settings" @click.prevent="navigate"
			>Settings</a
		>
	</ui-nav-menu>

	<div id="loader" v-if="loading">
		<div class="spinner"></div>
	</div>

	<router-view />
</template>
<style lang="css" scoped>
#loader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}
#loader .spinner {
	border: 8px solid #f3f3f3;
	border-top: 8px solid #3498db;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: spin 1s linear infinite;
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
