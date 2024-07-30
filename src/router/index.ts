import { loadLayouMiddleware } from './middleware/loadLayout.middleware'
import { createRouter, createWebHistory } from 'vue-router'

const routes = <[]>[]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(loadLayouMiddleware)

export default router
