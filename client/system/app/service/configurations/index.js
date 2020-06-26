app.service.configurations.index = controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/service/${ name }/service_definition`

  return [

    a.h3( `Configure` ),
    app.close( controller ),
    app.http(
      path,
      ( definition, el ) => {
        let configurations = Object.values( x.lib.object.dig( definition, [ 'configurators' ], {} ) )
        el.$nodes = [
          configurations.length ?
          configurations.map( configuration => a.div( [
            app.btn(
              app.icon( 'fa fa-caret-right', ( configuration.label || configuration.name ) ),
              () => controller.open( configuration.name ),
            ),
          ] ) ) :
          a.i( 'None' )
        ]
      },
      {
        placeholder: app.hourglass( 'Loading configurations' )
      }

    ),

  ]


}
