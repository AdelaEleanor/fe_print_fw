import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/native-print',
      name: 'native-print',
      component: () => import('../views/NativePrint.vue'),
    },
    {
      path: '/printjs',
      name: 'printjs',
      component: () => import('../views/PrintJS.vue'),
    },
    {
      path: '/vue-print',
      name: 'vue-print',
      component: () => import('../views/VuePrintNb.vue'),
    },
    {
      path: '/jspdf',
      name: 'jspdf',
      component: () => import('../views/JsPDF.vue'),
    },
    {
      path: '/pdfmake',
      name: 'pdfmake',
      component: () => import('../views/Pdfmake.vue'),
    },
    {
      path: '/html2canvas',
      name: 'html2canvas',
      component: () => import('../views/Html2Canvas.vue'),
    },
    {
      path: '/html2pdf',
      name: 'html2pdf',
      component: () => import('../views/Html2Pdf.vue'),
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/PerformanceTest.vue'),
    },
    {
      path: '/compatibility',
      name: 'compatibility',
      component: () => import('../views/Compatibility.vue'),
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('../views/Pagination.vue'),
    },
    {
      path: '/pdf-lib',
      name: 'pdf-lib',
      component: () => import('../views/PDFLIB.vue'),
    },
    {
      path: '/print-html-element',
      name: 'print-html-element',
      component: () => import('../views/PrintHtmlElement.vue'),
    },
    {
      path: '/chart-comparison',
      name: 'chart-comparison',
      component: () => import('../views/ChartComparison.vue'),
    },
  ],
})

export default router
