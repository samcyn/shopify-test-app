<script lang="ts" setup>
import { h } from 'vue';
import {
  Icon,
} from '@ownego/polaris-vue';

import BaseIcon from '@/components/shared/JMIcon/base.vue';

const props = withDefaults(defineProps<{
  icon: string;
  accessibilityLabel?: string;
  tone?: "base" | "inherit" | "critical" | "caution" | "subdued" | "magic" | "warning" | "interactive" | "info" | "success" | "primary" | "emphasis" | "textCaution" | "textWarning" | "textCritical" | "textInfo" | "textSuccess" | "textPrimary" | "textMagic"
}>(), {
  icon: 'ArchiveIcon',
  tone: 'inherit',
});

const AsyncComp = h(BaseIcon, {
  icon: props.icon,
});
</script>

<template>
  <Icon :source="AsyncComp" :accessibility-label="accessibilityLabel" :tone="tone"></Icon>
</template>
