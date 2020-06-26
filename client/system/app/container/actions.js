app.container.actions = type => controller => (a,x) => [

  controller.nest({
    routes: {
      '/?': app[type].actions.index,
      '/:action_name': app[type].actions.show,
    }
  })

]
