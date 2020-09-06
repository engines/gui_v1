app.service.configurations = controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.service.configurations.index,
      '/:configuration_name/?': app.service.configurations.show,
      '/:configuration_name/edit': app.service.configurations.edit,
    }
  })

]
