<script lang="ts" setup>
import type { Events } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  to: {
    type: String,
    required: true,
  },
  rel: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const onClick = (e: Events['onClick']) => {
  const target = e.target as HTMLElement;
  const href = target?.dataset.href;
  if (href) {
    history.pushState({}, "", href);
    router.push(href);
  } else {
    history.pushState({}, "", '/');
    router.push('/');
  }
}
</script>
<template>
  <a :href="to" :rel="rel" :data-href="to" @click.prevent="onClick">
    {{ title }}
  </a>
</template>
