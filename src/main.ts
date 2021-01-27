// =========================
// Setup
// =========================

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ErrorPage from '@/pages/ErrorPage.vue';
import Home from '@/pages/Home.vue';
import App from './App.vue';

// =========================
// Router Paths
// =========================

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Anivive Lifesciences',
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: ErrorPage,
      meta: {
        title: 'Uh Oh!',
      }
    },
  ],
});

// =========================
// App Settings
// =========================

// @ts-ignore
const app = createApp(App);

app.use(router);

// =========================
// Start Router
// =========================
router
  .isReady()
  .then(() => {
    app.mount('#app');
  });
