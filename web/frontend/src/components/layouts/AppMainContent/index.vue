<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import SideBarActionList from '@/components/shared/SideBarActionList/index.vue';
import data from '@/router/data.json';
import type { IRoutes } from '@/router/types';

const route = useRoute();
const router = useRouter();

const isSidebarOpen = ref(false);

const pageData = data as IRoutes;
const groups = pageData['menu_settings_key'].children;

const handleOpenSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const handleOpenSidebar2 = () => {
  (window as any).shopify?.modal.show('app-main-content-modal');
}

watch(() => route.fullPath, () => {
  isSidebarOpen.value = false;
});

onMounted(() => {
  window.addEventListener('message', (event) => {
    const { type, to } = event.data;
    if (type === 'change-route') {
      router.push(to);
      (window as any).shopify?.modal.hide('app-main-content-modal');
    }
  });
});
</script>

<template>
  <section class="main_content" :class="{ 'main_content--open': isSidebarOpen }">
    <div v-if="isSidebarOpen" class="main_content__overlay" @click="handleOpenSidebar"></div>
    <div class="main_content__wrapper">
      <div class="main_content_no_margin">
        <router-view :showSidebarButtons="true" @openSidebar="handleOpenSidebar" @openSidebar2="handleOpenSidebar2" />
      </div>
    </div>
  </section>
  <ui-modal id="app-main-content-modal">
    <SideBarActionList :groups="groups" mode="modal" />
  </ui-modal>
</template>

<style lang="css" scoped>
.main_content {
  position: relative;
  /* flex: 1; */
  /* width: calc(100% - var(--sidebar-width)); */
  width: 100%;
  height: 100%;
  background-color: #f1f2f4;
  padding: 24px;
  z-index: 100;
  transition: transform 0.33s cubic-bezier(0.42, 0, 0.13, 1.06);
  overflow-y: auto;
  /* background-color: green; */
  /* padding: 16px 24px 16px calc(var(--sidebar-width) + var(--space-between-sidebar-and-main-content)/2); */
}

.main_content--open {
  transform: translateX(calc(var(--sidebar-width) * -1));
}

.main_content__wrapper {
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
}

.main_content__overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

@media (min-width: 768px) {
  .main_content {
    z-index: 0;
    padding: 16px 24px 16px calc(var(--sidebar-width) + var(--space-between-sidebar-and-main-content)/2);
  }

  .main_content--open {
    transform: none;
  }

  .main_content__overlay {
    display: none;
  }

  .main_content_no_margin {
    margin: 0 -24px;
  }
}
</style>
