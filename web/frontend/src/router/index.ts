import { createRouter, createWebHistory } from 'vue-router'
import data from './data.json';
import type { IRoutes } from './types';
import { defineAsyncComponent } from 'vue';

const PageComponent = () => import('../pages/AboutView.vue');

const pageData = data as IRoutes;
const pages = Object.keys(pageData) as (keyof IRoutes)[];

const routes = pages.map((page) => {
  const { path, name, children } = pageData[page];

  const flatChildren = children.flatMap((group) =>
    group.children.map(({ path, name, description, title }) => ({
      name,
      path: path.replace(/^\/+/, '').toLowerCase(),
      meta: {
        identifier: page,
        title,
        description,
      },
      component: PageComponent,
    }))
  );

  return {
    path,
    name,
    meta: {
      identifier: page,
    },
    children: flatChildren,
  };
});

// console.table(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
