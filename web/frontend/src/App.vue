<script setup></script>

<template>
	<ui-nav-menu>
		<router-link to="/" rel="home">Home</router-link>
		<router-link to="/dashboard">Dashboard</router-link>
		<router-link to="/settings">Settings</router-link>
	</ui-nav-menu>
	
	<router-view />
</template>
