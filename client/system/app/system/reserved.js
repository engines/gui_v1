app.system.reserved = controller => (a,x) => [
  app.close( controller ),

  a.h3( 'Reserved' ),

  a.div( app.collapse( {
    label: 'Container names',
    body: app.http(
      '/-/-/system/reserved/engine_names',
      ( result, el ) => el.$nodes = x.out( result )
    ),
  } ) ),
  a.div( app.collapse( {
    label: 'Hostnames',
    body: app.http(
      '/-/-/system/reserved/hostnames',
      ( result, el ) => el.$nodes = x.out( result )
    ),
  } ) ),
  a.div( app.collapse( {
    label: 'Ports',
    body: app.http(
      '/-/-/system/reserved/ports',
      ( result, el ) => el.$nodes = x.out( result )
    ),
  } ) ),

]
