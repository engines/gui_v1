app.service.configurations.show = controller => (a,x) => {

  const containerName = controller.params.name
  const configurationName = controller.params.configuration_name

  let containerPath = `/-/-/containers/service/${ containerName }`

  return [

    app.close( controller ),
    app.http(
      [
        `${ containerPath }/service_definition`,
        `${ containerPath }/configuration/${ configurationName }`
      ],
      ( [ definition, configuration ], el ) => {

        let configurator = x.lib.object.dig(
          definition, [ 'configurators' ], {}
        )[ configurationName ]

        let values = configuration.variables

        el.$nodes = [
          a.h3( configurator.label || configurator.name ),
          a.small( configurator.description ),
          app.btn(
            app.icon( 'fa fa-edit', 'Edit' ),
            () => controller.open( 'edit' )
          ),
          a.div(x.out(configuration.variables)),
        ]

      },
      {
        placeholder: app.hourglass( 'Loading configuration' )
      }

    ),

  ]

}
