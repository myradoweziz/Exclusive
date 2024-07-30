const CheckOut = () => import('./pages/CheckOut.vue')

const moduleRoute = {
  path: '/check-out',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'check-out',
      component: CheckOut
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
