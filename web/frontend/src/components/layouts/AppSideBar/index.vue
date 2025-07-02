<script setup lang="ts">
// import { computed, ref, watch } from 'vue';
// import { useRoute } from 'vue-router';

// import { Card, Form, TextField } from '@ownego/polaris-vue';

// import MenuListGroup from '@/components/shared/MenuListGroup/index.vue';
import SideBarActionList from '@/components/shared/SideBarActionList/index.vue';
import data from '@/router/data.json';
import type { IRoutes } from '@/router/types';

// const searchTerm = ref('');
// const route = useRoute();

const pageData = data as IRoutes;
const groups = pageData['menu_settings_key'].children;
// const nodes = computed(() => {
//   const groups = pageData['menu_settings_key'].children;

//   if (!searchTerm.value) return groups;

//   // Apply filtering
//   return groups
//     .map((group) => {
//       const filteredChildren = group.children.filter((route) => {
//         const lowerSearch = searchTerm.value.toLowerCase();
//         return (
//           route.title.toLowerCase().includes(lowerSearch) ||
//           route.name.toLowerCase().includes(lowerSearch) ||
//           route.description?.toLowerCase().includes(lowerSearch)
//         );
//       });

//       return {
//         ...group,
//         children: filteredChildren,
//       };
//     })
//     .filter((group) => group.children.length > 0); // Remove empty groups
// });

// watch(() => route.fullPath, () => {
//   searchTerm.value = '';
// });
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__wrapper">
      <!-- <Card padding="0">
        <div class="sidebar__top">
          <Form noValidate>
            <TextField
              v-model="searchTerm"
              type="text"
              size="medium"
              autoComplete="off"
              placeholder="Search"
              prefix="🔍"
            />
          </Form>
        </div>
        <MenuListGroup :children="nodes" />
      </Card> -->
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
