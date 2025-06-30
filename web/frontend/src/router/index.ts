import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue';
import data from './data.json';
import type { IRoutes } from './types';

const pageData = data as IRoutes;

const pages = Object.keys(pageData) as (keyof IRoutes)[];

const routes = pages.map((page) => {
  const { meta, path, name, children } = pageData[page];

  const flatChildren = children.flatMap((group) =>
    group.children.map(({ path, name }) => ({
      path,
      name,
      component: () => import('../pages/AboutView.vue'),
    }))
  );

  return {
    path,
    name,
    meta,
    children: flatChildren,
  };
});

// console.table(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
