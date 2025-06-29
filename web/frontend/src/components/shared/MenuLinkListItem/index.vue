<script setup lang="ts">
// import PlusCircleIcon from '@icons/PlusCircleIcon.svg';
</script>
<template>
  <li class="menu">
    <router-link to="/" class="menu__link">
      <span class="menu__wrapper">
        <!-- <Icon :source="PlusCircleIcon" class="menu__link-icon"></Icon> -->
        <span class="menu__link-text">Review 1</span>
      </span>
    </router-link>
  </li>
</template>

<style lang="css" scoped>
/* .menu {
  margin-bottom: 4px;
} */

.menu__link {
  display: block;
  padding: 0 6px;
  text-decoration: none;
  font-family: var(--p-font-family-sans)
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
  color: #303030; /* var(--p-color-text); */
}

.menu__link-icon {
  width: 20px;
  height: 20px;
}
</style>
