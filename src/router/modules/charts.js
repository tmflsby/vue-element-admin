/** When your routing charts is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/Keyboard'),
      name: 'Keyboard',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/Line'),
      name: 'Line',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/MixChart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    }
  ]
};

export default chartsRouter;
