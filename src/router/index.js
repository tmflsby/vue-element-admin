import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/* Layout */
import Layout from "@/layout";

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/AuthRedirect'),
    hidden: true
  },
  {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }
  ]
}
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [];

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export const resetRouter = () => {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
};

export default router;
