app.applications.blueprint.service_configurations = blueprint => controller => (a,x) => [

  controller.nest({
    routes: {
      '/?': app.applications.blueprint.service_configurations.index( blueprint ),
      '/new_namespace': app.applications.blueprint.service_configurations.new_namespace( blueprint ),
      '/new_type': app.applications.blueprint.service_configurations.new_type( blueprint ),
      '/new': app.applications.blueprint.service_configurations.new( blueprint ),
      '/:service_configuration_id/?': app.applications.blueprint.service_configurations.show( blueprint ),
      '/:service_configuration_id/edit': app.applications.blueprint.service_configurations.edit( blueprint ),
      '/:service_configuration_id/delete': app.applications.blueprint.service_configurations.delete( blueprint ),
      '/:service_configuration_id/variables/?': app.applications.blueprint.service_configurations.variables( blueprint ),
    }
  })

]
