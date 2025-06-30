<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  icon: string
  size?: string
}>(), {
  size: '1em'
})

const iconName = computed(() => `#icon-${props.icon}`)
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="iconName" fill="currentColor" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: v-bind(size);
  height: v-bind(size);
  fill: currentColor;
  vertical-align: middle;
}
</style><
