import { h, defineComponent } from 'vue'
import {
	createWebHistory,
	createRouter,
} from 'vue-router';

import HomeView from './pages/Home.vue';

const NotFoundPage = defineComponent({
  render() {
    return h('div', 'not found')
  }
});

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () =>
			import('./pages/Dashboard.vue'),
	},
	{
		path: '/settings',
		name: 'settings',
		component: () =>
			import('./pages/Settings.vue'),
	},
  { 
    path: '/:pathMatch(.*)*', 
    component: NotFoundPage 
  },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
