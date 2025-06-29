<script setup lang="ts">
import MenuList from '@/components/shared/MenuList/index.vue';
</script>
<template>
  <ul class="menu_list_group">
    <li class="menu_list_group__item">
      <MenuList />
    </li>
    <li class="menu_list_group__item">
      <MenuList />
    </li>
    <li class="menu_list_group__item">
      <MenuList />
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

.menu_list_group__item:not(:last-child) {
  border-bottom: 1px solid #E1E3E5;
}
</style>
