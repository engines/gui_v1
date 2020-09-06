app.container.bindings = type => controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.container.bindings.index( type ),
      '/new*': app.container.bindings.new( type ),
      '/persistent*': app.container.bindings.persistent( type ),
      '/nonpersistent*': app.container.bindings.nonpersistent( type ),
    }
  })

]
