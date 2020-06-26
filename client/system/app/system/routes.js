app.system.routes = ( system, controller ) => (a,x) => [
  controller.nest({
    routes: {
      '/applications/:name*': app.application,
      '/services/:name*': app.service,
      '*': app.system.show,
    }
  })

]
