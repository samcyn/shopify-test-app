<script setup lang="ts">
</script>

<template>
  <section class="main_content">
    <div class="main_content__wrapper">
      <div class="main_content_no_margin">
        <router-view />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.main_content {
  flex: 1;
  width: calc(100% - var(--sidebar-width));
  height: 100%;
  /* background-color: green; */
  padding: 16px 24px 16px 5px;
}

.main_content__wrapper {
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
}

.main_content_no_margin {
  margin: 0 -24px;
}
</style>
