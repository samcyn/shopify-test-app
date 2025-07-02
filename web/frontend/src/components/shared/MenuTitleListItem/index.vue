<script setup lang="ts">
import type { IRoute } from '@/router/types';

withDefaults(defineProps<Pick<IRoute, 'title'>>(), {
  title: 'Title',
});
</script>

<template>
  <li class="menu">
    <div class="menu__title">{{ title }}</div>
  </li>
</template>

<style lang="css" scoped>
.menu__title {
  display: block;
  padding: 6px 16px;
  color: #767676;
  font-size: 10px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: var(--p-font-family-sans);
}
</style>
