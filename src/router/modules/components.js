/** When your routing components is too long, you can split it into small modules **/

import Layout from '@/layout';

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/BackToTopDemo'),
      name: 'BackToTopDemo',
      meta: { title: 'Back To Top' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/StickyDemo'),
      name: 'StickyDemo',
      meta: { title: 'Sticky' }
    }
  ]
}

export default componentsRouter
