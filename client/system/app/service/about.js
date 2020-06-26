app.service.about = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( `About` ),
    app.close( controller ),
    app.http(
      `/-/-/containers/service/${ name }/service_definition`,
      ( definition, el ) => {

        el.$nodes = [
          a.p( a.strong( definition.title ) ),
          a.p( definition.description ),
        ]

      },
      {
        placeholder: app.hourglass( 'Loading info' )
      }

    ),

  ]


}
