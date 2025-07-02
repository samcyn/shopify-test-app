<script setup lang="ts">
import MenuList from '@/components/shared/MenuList/index.vue';
import type { IRouteGroups } from '@/router/types';
import type { RouterLinkProps } from 'vue-router';
interface IMenuListGroupProps {
  children: IRouteGroups['children']
  mode?: 'sidebar' | 'modal'
}

withDefaults(defineProps<IMenuListGroupProps>(), {
  mode: 'sidebar'
});

const emit = defineEmits<{
  (e: 'navigate', to: RouterLinkProps['to']): void
}>();

const handleNavigate = (to: RouterLinkProps['to']) => {
  emit('navigate', to);
}
</script>
<template>
  <ul class="menu_list_group" :class="{
    'menu_list_group--sidebar': mode === 'sidebar',
    'menu_list_group--modal': mode === 'modal'
  }">
    <li v-for="child in children" :key="child.id" class="menu_list_group__item">
      <MenuList v-bind="child" :mode="mode" @navigate="handleNavigate" />
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

.menu_list_group--sidebar {
  /* height: 100%; */
  height: calc(100vh - 48px);
  overflow-y: auto;
}

.menu_list_group__item:not(:last-child) {
  border-bottom: 1px solid #E1E3E5;
}

@media (min-width: 768px) {
  .menu_list_group--sidebar {
    height: auto;
    max-height: calc(100vh * 0.75);
  }
}
</style>
