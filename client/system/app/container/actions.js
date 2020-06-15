app.container.actions = type => controller => (a,x) => [

  controller.nest({
    routes: {
      '/?': app[type].actions.index,
      '/perform': app[type].actions.perform( type ),
    }
  })

]
