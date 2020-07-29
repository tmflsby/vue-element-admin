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
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/DragDialogDemo'),
      name: 'DragDialogDemo',
      meta: { title: 'Drag Dialog' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/DragKanbanDemo'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/DragSelectDemo'),
      name: 'DragSelectDemo',
      meta: { title: 'Drag Select' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/DndListDemo'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
  ]
}

export default componentsRouter
