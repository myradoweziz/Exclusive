const moduleRoute = {
  path: '/about',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'about',
      component: () => import('./pages/About.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
