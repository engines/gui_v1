app.namespaces.workspace.services.blueprint.configurators.variables.delete = blueprint => controller => (a,x) => {

  let configurator = blueprint.configurators.find( controller.params.configurator_id )
  let variable = configurator.variables.find( controller.params.variable_id )

  return [

    a.h5( `Delete configurator ${ configurator.id + 1 } variable ${ variable.id + 1 }` ),
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
        title: 'Delete configurator',
        onclick: (e,el) => {

          variable.delete()

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
