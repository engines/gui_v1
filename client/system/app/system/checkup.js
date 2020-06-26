app.system.checkup = controller => (a,x) => [

  a.h3( 'System checkup' ),

  app.close( controller ),

  app.http(
    '/-/-/containers/check_and_act',
    (  report, el ) => el.$nodes = x.out( report ),
  )

]
