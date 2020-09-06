app.system.certificates.index = controller => (a,x) => [

  app.close( controller ),

  app.http( '/-/-/system/certs/default' ),

  app.http(
    '/-/-/system/certs/'
  ),

  app.http( '/-/-/system/certs/service_certs' )

]
