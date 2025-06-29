<script setup lang="ts">
import MenuLinkListItem from '@/components/shared/MenuLinkListItem/index.vue';
import MenuTitleListItem from '@/components/shared/MenuTitleListItem/index.vue';
</script>
<template>
  <ul class="menu_list">
    <MenuTitleListItem />
    <MenuLinkListItem />
    <MenuLinkListItem />
  </ul>
</template>

<style lang="css" scoped>
.menu_list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu_list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0 !important;
}
</style>
