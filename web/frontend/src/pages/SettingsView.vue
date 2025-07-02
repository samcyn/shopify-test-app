<script setup lang="ts">
import AppSideBar from '@/components/layouts/AppSideBar/index.vue';
import AppMainContent from '@/components/layouts/AppMainContent/index.vue';
</script>

<template>
  <main class="wrapper">
    <!-- Sidebar -->
    <app-side-bar />
    <!-- Main Content -->
    <app-main-content />
  </main>
</template>

<style lang="css" scoped>
.wrapper {
  overflow: hidden;
  height: 100%;
  background-color: #f1f2f4;
  display: flex;
  position: relative;
}
</style>
