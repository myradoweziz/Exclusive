const moduleRoute = {
  path: '/my-account',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'my-account',
      component: () => import('./pages/MyAccount.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
