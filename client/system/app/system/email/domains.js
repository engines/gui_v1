app.system.email.domains = controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.system.email.domains.index,
      '/default': app.system.email.domains.default,
      '/add': app.system.email.domains.add,
      '/remove': app.system.email.domains.remove,
    }
  })

]
