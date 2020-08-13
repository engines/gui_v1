app.container.bindings.nonpersistent.registration = type => controller => (a,x) => [

  a.h5('Registration'),

  app.close(controller),

  controller.nest({
    routes: {
      '/?': app.container.bindings.nonpersistent.registration.show( type ),
      '/register/?': app.container.bindings.nonpersistent.registration.register( type ),
      '/deregister/?': app.container.bindings.nonpersistent.registration.deregister( type ),
      '/reregister/?': app.container.bindings.nonpersistent.registration.reregister( type ),
    }
  })

]
