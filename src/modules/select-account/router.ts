const moduleRoute = {
  path: '/select-account',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'select-account',
      component: () => import('./pages/SelectAccount.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
