<script setup lang="ts">
import MenuList from '@/components/shared/MenuList/index.vue';
import type { IRouteGroups } from '@/router/types';

defineProps<Pick<IRouteGroups, 'children'>>();

</script>
<template>
  <ul class="menu_list_group">
    <li
      v-for="child in children"
      :key="child.id"
      class="menu_list_group__item"
    >
      <MenuList v-bind="child" />
    </li>
  </ul>
</template>

<style lang="css" scoped>
.menu_list_group,
.menu_list_group .menu_list_group__item {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu_list_group {
  height: 100%;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}

.menu_list_group__item:not(:last-child) {
  border-bottom: 1px solid #E1E3E5;
}

@media (min-width: 768px) {
  .menu_list_group {
    max-height: calc(100vh * 0.75);
  }
}
</style>
