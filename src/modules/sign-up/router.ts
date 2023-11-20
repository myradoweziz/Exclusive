const moduleRoute = {
  path: '/sign-up',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'sign-up',
      component: () => import('./pages/SignUp.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
