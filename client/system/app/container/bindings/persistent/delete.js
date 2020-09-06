app.container.bindings.persistent.delete = type => controller => (a,x) => [

  a.h5(`Delete binding`),

  controller.mount({
    routes: {
      '/?': app.container.bindings.persistent.delete.show( type ),
      '/keep*': app.container.bindings.persistent.delete.keep( type ),
      '/destroy*': app.container.bindings.persistent.delete.destroy( type ),
    }
  })

]
