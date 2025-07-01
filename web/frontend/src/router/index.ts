import { createRouter, createWebHistory } from 'vue-router'
import data from './data.json';
import type { IRoutes } from './types';

const HomePageComponent = () => import('../pages/HomeView.vue');
const SettingsPageComponent = () => import('../pages/SettingsView.vue');
const ReviewsPageComponent = () => import('../pages/ReviewsView.vue');
const PageComponent = () => import('../components/features/PageComponent.vue');

const pageData = data as IRoutes;
const pages = Object.keys(pageData) as (keyof IRoutes)[];

const pageComponents = {
  menu_home_key: HomePageComponent,
  menu_settings_key: SettingsPageComponent,
  menu_reviews_key: ReviewsPageComponent,
};

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
    component: pageComponents[page],
    children: flatChildren,
  };
});

// console.table(routes);

const router = createRouter({
  history: createWebHistory(),
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: PageComponent,
  //   },
  //   {
  //     path: '/reviews',
  //     name: 'reviews',
  //     component: PageComponent,
  //   },
  //   {
  //     path: '/settings',
  //     name: 'settings',
  //     component: SettingsComponent,
  //     children: [
  //       {
  //         path: '',
  //         name: 'reviews',
  //         component: PageComponent,
  //       },
  //     ],
  //   },
  // ],
  routes,
})

export default router
