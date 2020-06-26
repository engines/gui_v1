app.service.definition = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( `Definition` ),
    app.close( controller ),
    app.http(
      `/-/-/containers/service/${ name }/service_definition`,
      ( definition, el ) => el.$nodes = x.out( definition ),
      {
        placeholder: app.hourglass( 'Loading definition' )
      }

    ),

  ]


}
