app.service.configurations = controller => (a,x) => [

  controller.nest({
    routes: {
      '/?': app.service.configurations.index,
      '/perform': app.service.configurations.perform,
    }
  })

]
