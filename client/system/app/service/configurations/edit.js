app.service.configurations.edit = controller => (a,x) => {

  const containerName = controller.params.name
  const configurationName = controller.params.configuration_name

  let containerPath = `/-/-/containers/service/${ containerName }`

  return [

    app.http(
      [
        `${ containerPath }/service_definition`,
        `${ containerPath }/configuration/${ configurationName }`
      ],
      ( [ definition, configuration ], el ) => {

        let configurator = x.lib.object.dig(
          definition, [ 'configurators' ], {}
        )[ configurationName ]

        let values = configuration.variables || {}

        el.$nodes = [
          a.h3( configurator.label || configurator.name ),
          a.small( configurator.description ),

          app.form( {
            url: `${ containerPath }/configuration/${ configurationName }`,
            scope: 'api_vars[variables]',
            success: () => controller.open( '..' ),
            form: f => [
              configurator.variables.map( variable => f.field( {
                ...enginesFieldV1( variable ),
                value: values[ variable.name ],
              } ) ),
              f.buttons(),
            ],
          } ),
        ]

      },
      {
        placeholder: app.hourglass( 'Loading configuration' )
      }

    ),

  ]

}
