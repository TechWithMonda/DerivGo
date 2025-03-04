import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Guide.vue'),
    },
    {
      path: '/premium',
      name: 'premium',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Premium.vue'),
    },
    {
      path: '/freebots',
      name: 'freebots',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/freebots.vue'),
    },
    {
      path: '/virtualtradergames',
      name: 'virtualtradergames',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/virtualtradergame.vue'),
    },
    {
      path: '/policy',
      name: 'policy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/policy.vue'),
  
    meta: {
      showHeaderFooter: false, // Hide the nav bar
    },
  },
    {
      path: '/createaccount',
      name: 'createaccount',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/createaccount.vue'),
      meta: {
        showHeaderFooter: false, // Hide the nav bar
      },
    },
    {
      path: '/deposit',
      name: 'deposit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/deposit.vue'),
      meta: {
        showHeaderFooter: false, // Hide the nav bar
      },
    },
    
  ],
})

export default router
