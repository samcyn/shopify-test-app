<template>
  <main class="wrapper">
    <Box paddingBlockStart="400" paddingInline="600">
      <LegacyCard>
        <Tabs :tabs="tabs" :selected="selected" @select="handleTabChange">
        </Tabs>
      </LegacyCard>
    </Box>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Tabs, LegacyCard, Box } from '@ownego/polaris-vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const selected = ref(0);

const tabs = [
  {
    id: 'reviews-review-management-all-reviews',
    content: 'Reviews',
    badge: '10+',
    accessibilityLabel: 'All reviews',
    panelID: 'all-reviews-1',
  },
  {
    id: 'reviews-review-management-pending-reviews',
    content: 'Review requests',
    badge: '4',
    panelID: 'review-requests-2',
    accessibilityLabel: 'Review requests',
  },
  {
    id: 'reviews-review-management-approved-reviews',
    content: 'Customers questions',
    badge: '2',
    panelID: 'customers-questions-3',
    accessibilityLabel: 'Customers questions',
  },
];

const handleTabChange = (selectedTabIndex: number) => {
  const currentTab = tabs[selectedTabIndex];
  if (currentTab.id === route.name) {
    return;
  }
  selected.value = selectedTabIndex;
  router.push({ name: currentTab.id });
}

onMounted(() => {
  const currentTab = tabs.find(tab => tab.id === route.name);
  if (currentTab) {
    selected.value = tabs.indexOf(currentTab);
  }
});
</script>

<style lang="css" scoped>
.wrapper {
  height: 100%;
  position: relative;
}
</style>
