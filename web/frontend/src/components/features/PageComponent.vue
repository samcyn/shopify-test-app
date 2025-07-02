<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import MenuListGroup from '@/components/shared/MenuListGroup/index.vue';
import data from '@/router/data.json';
import type { IRoutes } from '@/router/types';

import {
  Page,
  Text,
  LegacyCard,
  Card,
  BlockStack,
  InlineStack,
  ButtonGroup,
  Button,
  Layout,
  LayoutSection,
  ResourceList,
  ResourceItem,
  Thumbnail,
  LegacyCardSection,
  Form, TextField
} from '@ownego/polaris-vue';
import { useRoute } from 'vue-router';

const resourceItems = [
  {
    id: '1',
    name: 'Product 1',
    url: '#',
    sku: '1234567890',
    quantity: 10,
    media: {
      source: 'https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg',
      alt: 'Product 1',
    },
  },
];
const resourceItemsSecond = [
  {
    id: '342',
    url: '#',
    name: 'Black & orange scarf',
    sku: '9234194023',
    quantity: '100',
    media: {
      source: 'https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg',
      alt: 'Black orange scarf',
    },
  },
  {
    id: '257',
    url: '#',
    name: 'Tucan scarf',
    sku: '9234194010',
    quantity: '201',
    media: {
      source: 'https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg',
      alt: 'Tucan scarf',
    },
  },
];

const route = useRoute();

const pageInfo = computed(() => {
  const { title, description } = route.meta as Record<string, string>;
  return {
    title: title || 'No title',
    description: description || 'No description',
  };
});

defineProps<{
  showSidebarButtons?: boolean;
}>();

const emit = defineEmits<{ (e: 'openSidebar'): void, (e: 'openSidebar2'): void }>();

const handleOpenModal = () => {
  emit('openSidebar2');
};
</script>

<template>
  <Page fullWidth :title="pageInfo.title" compactTitle :backAction="{ content: 'Products', url: '#' }">
    <Layout>
      <LayoutSection variant="fullWidth">
        <Card roundedAbove="sm">
          <BlockStack gap="500">
            <BlockStack gap="200">
              <Text as="h2" variant="headingSm">
                {{ pageInfo.description }}
              </Text>
              <Text as="p" variant="bodyMd">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </Text>
            </BlockStack>
            <InlineStack v-if="showSidebarButtons" align="end">
              <ButtonGroup>
                <Button accessibilityLabel="Enable two-step authentication" @click="() => { $emit('openSidebar') }">
                  Mobile Navigation
                </Button>
                <!-- <Button variant="plain">Learn more</Button> -->
              </ButtonGroup>
            </InlineStack>
          </BlockStack>
        </Card>
      </LayoutSection>
      <LayoutSection variant="fullWidth">
        <LegacyCard title="Credit card" sectioned>
          <Text as="p">Credit card information</Text>
          <InlineStack v-if="showSidebarButtons" align="end" class="test-button-modal">
            <ButtonGroup>
              <Button accessibilityLabel="Enable two-step authentication" @click="handleOpenModal">
                Mobile Navigation 2
              </Button>
            </ButtonGroup>
          </InlineStack>
        </LegacyCard>
      </LayoutSection>
      <LayoutSection variant="fullWidth">
        <LegacyCard title="Florida" :actions="[{ content: 'Manage' }]">
          <LegacyCardSection>
            <Text tone="subdued" as="span">
              455 units available
            </Text>
          </LegacyCardSection>
          <LegacyCardSection title="Items">
            <ResourceList :resourceName="{ singular: 'product', plural: 'products' }" :items="resourceItems">
              <ResourceItem v-for="item in resourceItems" :key="item.id" :id="item.id" :url="item.url"
                :accessibilityLabel="`View details for ${item.name}`">
                <template #media>
                  <Thumbnail :source="item.media.source" :alt="item.media.alt" />
                </template>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {{ item.name }}
                </Text>
                <div>SKU: {{ item.sku }}</div>
                <div>{{ item.quantity }} available</div>
              </ResourceItem>
            </ResourceList>
          </LegacyCardSection>
        </LegacyCard>
      </LayoutSection>

      <LayoutSection variant="fullWidth">
        <LegacyCard title="Nevada" :actions="[{ content: 'Manage' }]">
          <LegacyCardSection>
            <Text tone="subdued" as="span">
              301 units available
            </Text>
          </LegacyCardSection>
          <LegacyCardSection title="Items">
            <ResourceList :resourceName="{ singular: 'product', plural: 'products' }" :items="resourceItems">
              <ResourceItem v-for="item in resourceItemsSecond" :key="item.id" :id="item.id" :url="item.url"
                :accessibilityLabel="`View details for ${item.name}`">
                <template #media>
                  <Thumbnail :source="item.media.source" :alt="item.media.alt" />
                </template>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {{ item.name }}
                </Text>
                <div>SKU: {{ item.sku }}</div>
                <div>{{ item.quantity }} available</div>
              </ResourceItem>
            </ResourceList>
          </LegacyCardSection>
        </LegacyCard>
      </LayoutSection>
    </Layout>
  </Page>
</template>
<style lang="css" scoped>
@media (min-width: 768px) {
  .test-button-modal {
    display: none;
  }
}
</style>
