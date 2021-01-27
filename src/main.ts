// =========================
// Setup
// =========================

// @ts-ignore
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ErrorPage from '@/views/ErrorPage.vue';
import Home from '@/views/Home.vue';
import App from './App.vue';
import store from './store';

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
        title: 'Page Title',
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

app
  .use(store)
  .use(router);

// =========================
// Start Router
// =========================
router
  .isReady()
  .then(() => {
    app.mount('#app');
  });
