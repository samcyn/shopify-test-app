<script lang="ts" setup>
import { RouterLink, type RouterLinkProps, useLink } from 'vue-router'

interface IMenuLinkListItemBaseProps extends RouterLinkProps {
  mode?: 'sidebar' | 'modal'
}

const emit = defineEmits<{
  (e: 'navigate', to: RouterLinkProps['to']): void
}>();

const props = withDefaults(defineProps<IMenuLinkListItemBaseProps>(), {
  mode: 'sidebar'
})

const { navigate, href, isExactActive } = useLink(props);

const handleClick = () => {
  if (props.mode === 'modal') {
    emit('navigate', props.to);
  }
}
</script>

<template>
  <button
    v-if="mode === 'modal'"
    v-bind="$attrs"
    :class="isExactActive ? exactActiveClass : ''"
    type="button"
    @click="handleClick">
    <slot />
  </button>
  <router-link v-else v-bind="$props" custom>
    <a v-bind="$attrs" :href="href" @click="navigate" :class="isExactActive ? exactActiveClass : ''">
      <slot />
    </a>
  </router-link>
</template>
