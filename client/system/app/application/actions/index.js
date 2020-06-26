app.application.actions.index = controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/engine/${ name }/blueprint`

  return [

    a.h3( `Actions` ),
    app.close( controller ),
    app.http(
      path,
      ( blueprint, el ) => {
        let actions = x.lib.object.dig( blueprint, [ 'software', 'actionators' ], [] )
        el.$nodes = [ app.container.actions.index( controller, actions ) ]
      },
      {
        placeholder: app.hourglass( 'Loading actions' )
      }

    ),

  ]


}
