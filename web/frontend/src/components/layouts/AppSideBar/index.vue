<script setup lang="ts">
import SideBarActionList from '@/components/shared/SideBarActionList/index.vue';
import data from '@/router/data.json';
import type { IRoutes } from '@/router/types';



const pageData = data as IRoutes;
const groups = pageData['menu_settings_key'].children;
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__wrapper">
      <SideBarActionList :groups="groups" />
    </div>
  </aside>
</template>

<style lang="css" scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100%;
  padding: 0;
  /* background-color: red; */
  position: fixed;
  right: 0;
  z-index: 10;
}

.sidebar__wrapper {
  width: 100%;
  height: 100%;
  /* background-color: blue; */
}

@media (min-width: 768px) {
  .sidebar {
    padding: 16px calc(var(--space-between-sidebar-and-main-content) / 2) 16px 24px;
    right: auto;
  }
}
</style>
