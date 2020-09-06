app.container.bindings.nonpersistent.configure = type => controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.container.bindings.nonpersistent.configure.show( type ),
      '/edit/?': app.container.bindings.nonpersistent.configure.edit( type ),
    }
  })

]
