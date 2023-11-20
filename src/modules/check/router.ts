const moduleRoute = {
  path: '/check-out',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'check',
      component: () => import('./pages/CheckOut.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
