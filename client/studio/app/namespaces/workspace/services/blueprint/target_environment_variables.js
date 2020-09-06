app.namespaces.workspace.services.blueprint.target_environment_variables = blueprint => controller => (a,x) => [

  a.h5( 'Target environment variables' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.targetEnvironmentVariables,
    (f) => [
      f.field( {
        key: 'target_environment_variables',
        as: 'table',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'variable_name',
            required: true,
            as: 'select',
            selections: blueprint.consumerParams.collection.map(cp => cp.object.name),
          } ),
          ff.field( {
            key: 'environment_variable_name',
          } ),
        ]
      } ),

    ]

  ),

]
