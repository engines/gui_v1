app.container.bindings.nonpersistent.delete = type => controller => (a,x) => [

  a.h5(`Delete binding`),

  controller.nest({
    routes: {
      '/?': app.container.bindings.nonpersistent.delete.show( type ),
      '/keep*': app.container.bindings.nonpersistent.delete.keep( type ),
      '/destroy*': app.container.bindings.nonpersistent.delete.destroy( type ),
    }
  })

]
