app.applications.blueprint.service_configurations.delete = blueprint => controller => (a,x) => {

  let serviceConfiguration = blueprint.serviceConfigurations.find( controller.params.service_configuration_id )

  return [

    a.h5( `Delete service configuration ${ serviceConfiguration.id + 1 }` ),
    a.p( [

      app.button( {
        label: app.icon( 'fa fa-times', 'Cancel' ),
        class: 'btn btn-secondary',
        title: 'Cancel',
        onclick: (e,el) => {
          controller.open('..')
        },
      } ),
      ' ',
      app.button( {
        label: app.icon( 'fa fa-trash', 'Delete' ),
        class: 'btn btn-danger',
        title: 'Delete service configuration',
        onclick: (e,el) => {

          serviceConfiguration.delete()

          el.$nodes = [app.http(
            blueprint.apiEndpoint,
            () => controller.open( '../..' ),
            {
              method: 'POST',
              placeholder: app.hourglass('Saving blueprint'),
              headers: { 'Content-type': 'application/json' },
              body:  JSON.stringify( blueprint.output, null, 2 )
            }
          )]

        },
      } ),

    ] )

  ]

}
