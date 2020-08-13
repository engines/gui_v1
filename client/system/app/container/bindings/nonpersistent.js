app.container.bindings.nonpersistent = type => controller => (a,x) => [

  a.h3('Binding'),

  a.h3(`${
    controller.query.service
  }:${
    controller.query.handle
  }`),

  controller.nest({
    routes: {
      '/?': app.container.bindings.nonpersistent.show( type ),
      '/registration*': app.container.bindings.nonpersistent.registration( type ),
      '/edit/?': app.container.bindings.nonpersistent.edit( type ),
      '/delete*': app.container.bindings.nonpersistent.delete( type ),
    }
  })

]
