app.container.bindings.persistent = type => controller => (a,x) => [

  a.h3('Binding'),

  a.h3(`${
    controller.query.service
  }:${
    controller.query.handle
  }`),

  controller.nest({
    routes: {
      '/?': app.container.bindings.persistent.show( type ),
      '/export/?': app.container.bindings.persistent.export( type ),
      '/import/?': app.container.bindings.persistent.import( type ),
      '/edit/?': app.container.bindings.persistent.edit( type ),
      '/delete*': app.container.bindings.persistent.delete( type ),
    }
  })

]
