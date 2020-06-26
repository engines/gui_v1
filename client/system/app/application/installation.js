app.application.installation = controller =>  {

  const name = controller.params.name

  return (a,x) => [

    a.h3( 'Installation' ),
    app.close( controller ),

    app.http(
      `/-/-/containers/engine/${ name }/build_report`,
      ( report, el ) => el.$nodes = a.pre( report ),
      {
        placeholder: app.hourglass( 'Loading installation' ),
      }
    ),

  ]

}
