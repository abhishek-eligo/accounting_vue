import { createRouter, createWebHistory } from 'vue-router'
import navigationListItems from '@/data/navigation_list_items'

// Flatten only the items that have a 'path' and 'component' defined
const dynamicRoutes = navigationListItems
  .flatMap(section => section.items)
  .filter(item => item.path && item.component)
  .map(item => ({
    path: item.path,
    component: item.component,
    props: item.props || {},
  }))

const routes = [
  { path: '/', redirect: '/table' },
  { path: '/api-demo', component: () => import('@/pages/api-demo/index.vue') },
  { path: '/ledger/:id', component: () => import('@/pages/ledgers/[id].vue') },
  ...dynamicRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
