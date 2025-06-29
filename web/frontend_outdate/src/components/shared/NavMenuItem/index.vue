<script lang="js" setup>
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

const onClick = (e) => {
  const href = e.target.dataset.href;
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
