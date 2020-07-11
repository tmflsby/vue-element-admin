/** When your routing excel is too long, you can split it into small modules **/

import Layout from '@/layout';

const excelRouter = {
  path: '/excel',
  component: Layout,
  redirect: '/excel/export-excel',
  name: 'Excel',
  meta: {
    title: 'Excel',
    icon: 'excel'
  },
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/excel/ExportExcel'),
      name: 'ExportExcel',
      meta: { title: 'Export Excel' }
    },
    {
      path: 'export-selected-excel',
      component: () => import('@/views/excel/SelectExcel'),
      name: 'SelectExcel',
      meta: { title: 'Export Selected' }
    },
    {
      path: 'export-merge-header',
      component: () => import('@/views/excel/MergeHeader'),
      name: 'MergeHeader',
      meta: { title: 'Merge Header' }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/excel/UploadExcel'),
      name: 'UploadExcel',
      meta: { title: 'Upload Excel' }
    }
  ]
};

export default excelRouter;
