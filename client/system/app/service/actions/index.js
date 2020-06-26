app.service.actions.index = controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/service/${ name }/service_definition`

  return [

    a.h3( `Actions` ),
    app.close( controller ),
    app.http(
      path,
      ( definition, el ) => {
        let actions = Object.values( x.lib.object.dig( definition, [ 'service_actionators' ], {} ) )
        el.$nodes = [ app.container.actions.index( controller, actions ) ]
      },
      {
        placeholder: app.hourglass( 'Loading actions' )
      }

    ),

  ]


}
