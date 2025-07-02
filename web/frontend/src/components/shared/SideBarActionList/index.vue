<script setup lang="ts">
import { ref, computed } from 'vue';

import { Card, Form, TextField } from '@ownego/polaris-vue';
import MenuListGroup from '@/components/shared/MenuListGroup/index.vue';
import type { IRouteGroup } from '@/router/types';
import type { RouterLinkProps } from 'vue-router';
const searchTerm = ref('');

const props = withDefaults(defineProps<{
  groups: IRouteGroup[];
  mode?: 'sidebar' | 'modal';
}>(), {
  mode: 'sidebar'
});

const nodes = computed(() => {
  const groups = props.groups;

  if (!searchTerm.value) return groups;

  return groups
    .map((group) => {
      const filteredChildren = group.children.filter((route) => {
        const lowerSearch = searchTerm.value.toLowerCase();
        return (
          route.title.toLowerCase().includes(lowerSearch) ||
          route.name.toLowerCase().includes(lowerSearch) ||
          route.description?.toLowerCase().includes(lowerSearch)
        );
      });

      return {
        ...group,
        children: filteredChildren,
      };
    })
    .filter((group) => group.children.length > 0); // Remove empty groups
});

const handleChangeRoute = (to: RouterLinkProps['to']) => {
  window.postMessage({ type: 'change-route', to }, location.origin);
}
</script>

<template>
  <Card padding="0">
    <div class="sidebar__top">
      <Form noValidate>
        <TextField v-model="searchTerm" type="text" size="medium" autoComplete="off" placeholder="Search" prefix="🔍" />
      </Form>
    </div>
    <!-- Menu List Group -->
    <MenuListGroup :children="nodes" :mode="mode" @navigate="handleChangeRoute" />
  </Card>
</template>

<style lang="css" scoped>
.sidebar__top {
  padding: 12px 12px 0 12px;
}
</style>
