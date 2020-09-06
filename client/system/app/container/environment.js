app.container.environment = type => controller => (a,x) => [

  a.h3( 'Environment' ),

  controller.mount({
    routes: {
      '/?': app.container.environment.show( type ),
      '/edit': app.container.environment.edit( type ),
    }
  })

]
