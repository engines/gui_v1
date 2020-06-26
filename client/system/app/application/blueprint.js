app.application.blueprint = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( `Blueprint` ),
    app.close( controller ),
    app.http(
      `/-/-/containers/engine/${ name }/blueprint`,
      ( blueprint, el ) => el.$nodes = x.out( blueprint ),
      {
        placeholder: app.hourglass( 'Loading blueprint' )
      }

    ),

  ]


}
