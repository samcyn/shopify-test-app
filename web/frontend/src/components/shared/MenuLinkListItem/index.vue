<script setup lang="ts">
import JMIcon from '@/components/shared/JMIcon/index.vue';

withDefaults(defineProps<{
  icon?: string;
  title?: string;
}>(), {
  icon: 'ArchiveIcon',
  title: 'Title',
});
</script>

<template>
  <li class="menu">
    <router-link to="/" class="menu__link">
      <span class="menu__wrapper">
        <JMIcon icon="ArchiveIcon" class="menu__link-icon" />
        <span class="menu__link-text">Review 1</span>
      </span>
    </router-link>
  </li>
</template>

<style lang="css" scoped>
.menu__link {
  display: block;
  padding: 0 6px;
  text-decoration: none;
  font-family: var(--p-font-family-sans);
  color: #303030;
  /* var(--p-color-text); */
}

.menu__link:hover .menu__wrapper {
  background-color: #f1f2f4;
}

.menu__wrapper {
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 6px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.menu__link-text {
  font-size: 13px;
  line-height: 20px;
  font-weight: 450;
  color: inherit;
  flex: 1;
}

.menu__link-icon {
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
