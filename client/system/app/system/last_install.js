app.system.last_install = controller => (a,x) => [

  a.h5( 'Last install' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  app.http(
    '/~/~/engine_builder/last_build/params',
    ( installation, el ) => el.$nodes = x.out( installation ),
  ),
  app.http(
    '/~/~/engine_builder/last_build/log',
    ( log, el ) => el.$nodes = [cc.xterm( { text: log, label: 'Builder log' } )],
  ),
]
