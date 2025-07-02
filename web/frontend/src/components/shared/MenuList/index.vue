<script setup lang="ts">
import MenuLinkListItem from '@/components/shared/MenuLinkListItem/index.vue';
import MenuTitleListItem from '@/components/shared/MenuTitleListItem/index.vue';
import type { IRouteGroup } from '@/router/types';
import type { RouterLinkProps } from 'vue-router';

interface IMenuListProps extends IRouteGroup {
  mode?: 'sidebar' | 'modal'
}

withDefaults(defineProps<IMenuListProps>(), {
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
  <ul class="menu_list">
    <MenuTitleListItem :title="title" />
    <MenuLinkListItem v-for="child in children" :key="child.path" :mode="mode" v-bind="child"
      @navigate="handleNavigate" />
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
