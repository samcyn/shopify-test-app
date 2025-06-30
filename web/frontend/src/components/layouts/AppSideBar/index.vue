<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { Card, Form, TextField } from '@ownego/polaris-vue';

import MenuListGroup from '@/components/shared/MenuListGroup/index.vue';
import data from '@/router/data.json';
import type { IRoutes } from '@/router/types';

const route = useRoute();

const pageData = data as IRoutes;

const nodes = computed(() => {
  const meta = route.meta as Record<'identifier', keyof typeof pageData>;

  const { identifier } = meta;

  const records = pageData[identifier || 'menu_home_key'].children;

  return records;
});
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__wrapper">
      <Card padding="0">
        <div class="sidebar__top">
          <Form noValidate>
            <TextField
              type="text"
              size="medium"
              autoComplete="off"
              placeholder="Search"
              prefix="🔍"
            />
          </Form>
        </div>
        <!-- Menu List Group -->
        <MenuListGroup :children="nodes" />
      </Card>
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

.sidebar__top {
  padding: 12px 12px 0 12px;
}

@media (min-width: 768px) {
  .sidebar {
    padding: 16px calc(var(--space-between-sidebar-and-main-content) / 2) 16px 24px;
    right: auto;
  }
}
</style>
