app.container.environment = type => controller => (a,x) => [

  a.h5( 'Environment' ),

  controller.nest({
    routes: {
      '/?': app.container.environment.show( type ),
      '/edit': app.container.environment.edit( type ),
    }
  })

]
