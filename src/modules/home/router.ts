const moduleRoute = {
  path: '/',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('./pages/Home.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
