app.container.bindings.persistent.configure = type => controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.container.bindings.persistent.configure.show( type ),
      '/edit/?': app.container.bindings.persistent.configure.edit( type ),
    }
  })

]
