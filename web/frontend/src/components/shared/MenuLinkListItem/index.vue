<script setup lang="ts">
import JMIcon from '@/components/shared/JMIcon/index.vue';
import MenuLinkListItemBase from '@/components/shared/MenuLinkListItem/base.vue';
import type { IRoute } from '@/router/types';
import type { RouterLinkProps } from 'vue-router';
interface IMenuLinkListItemProps extends IRoute {
  mode?: 'sidebar' | 'modal'
}

withDefaults(defineProps<IMenuLinkListItemProps>(), {
  icon: 'ArchiveIcon',
  title: 'Title',
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
  <li class="menu" :data-link-name="name">
    <!-- <router-link :to="{ name: name }" class="menu__link"
      exact-active-class="menu__link--active">
      <span class="menu__wrapper">
        <JMIcon :icon="icon" class="menu__link-icon" />
        <span class="menu__link-text">{{ title }}</span>
      </span>
    </router-link> -->
    <MenuLinkListItemBase :to="{ name: name }" :mode="mode" class="menu__link" exact-active-class="menu__link--active"
      @navigate="handleNavigate">
      <span class="menu__wrapper">
        <JMIcon :icon="icon" class="menu__link-icon" />
        <span class="menu__link-text">{{ title }}</span>
      </span>
    </MenuLinkListItemBase>
  </li>
</template>

<style lang="css" scoped>
.menu__link {
  display: block;
  padding: 0 6px;
  text-decoration: none;
  font-family: var(--p-font-family-sans);
  color: #303030;
  background-color: transparent;
  outline: none;
  border: 0;
  width: 100%;
  text-align: left;
  cursor: pointer;
  /* var(--p-color-text); */
}

.menu__link:hover .menu__wrapper,
.menu__link--active .menu__wrapper {
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
