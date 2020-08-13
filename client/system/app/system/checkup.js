app.system.checkup = controller => (a,x) => [

  a.h3( 'Checkup' ),

  app.close( controller ),

  app.http(
    '/-/-/containers/check_and_act',
    (  report, el ) => el.$nodes = x.out( report ),
    {
      placeholder: app.hourglass('Checking'),
    }
  )

]
