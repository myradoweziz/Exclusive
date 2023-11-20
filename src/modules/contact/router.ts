const moduleRoute = {
  path: '/contact',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'contact',
      component: () => import('./pages/Contact.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
