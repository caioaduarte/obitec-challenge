import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/new_user',
    name: 'NewUser',
    component: () => import('../components/new_user/NewUser.vue'),
  },
  {
    path: '/edit_user/:id',
    name: 'Edit-User',
    component: () => import('../components/edit_user/EditUser.vue'),
  },
  {
    path: '/list_users',
    name: 'ListPage',
    component: () => import('../components/list_users/ListUsers.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
