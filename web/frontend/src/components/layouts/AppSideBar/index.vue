<script setup lang="ts">
import { Card, Form, TextField } from '@ownego/polaris-vue';

import MenuListGroup from '@/components/shared/MenuListGroup/index.vue';

</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__wrapper">
      <Card padding="0">
        <div class="sidebar__top">
          <Form noValidate>
            <TextField type="text" size="medium" autoComplete="off" placeholder="Search" />
          </Form>
        </div>
        <!-- Menu List Group -->
        <MenuListGroup />
      </Card>
    </div>
  </aside>
</template>

<style lang="css" scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100%;
  /* background-color: red; */
  padding: 16px 5px 16px 24px;
}

.sidebar__wrapper {
  width: 100%;
  height: 100%;
  /* background-color: blue; */
}

.sidebar__top {
  padding: 12px 12px 0 12px
}
</style>
