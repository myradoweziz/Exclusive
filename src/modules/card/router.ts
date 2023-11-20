const moduleRoute = {
  path: '/card',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'card',
      component: () => import('./pages/Card.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
