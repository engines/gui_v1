app.container.bindings.new = type => controller => (a,x) => [

  a.h3('New binding'),

  controller.mount({
    routes: {
      '/?': app.container.bindings.new.show( type ),
      '/strategy': app.container.bindings.new.strategy( type ),
      '/persistent': app.container.bindings.new.persistent( type ),
      '/nonpersistent': app.container.bindings.new.nonpersistent( type ),
    }
  })

]
