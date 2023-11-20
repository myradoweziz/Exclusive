const moduleRoute = {
  path: '/wish-list',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'wishlists',
      component: () => import('./pages/Wishlists.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
