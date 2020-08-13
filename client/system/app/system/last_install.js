app.system.last_install = controller => (a,x) => [

  a.h3( 'Last install' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller ),
    ] )
  ),

  app.http(
    '/-/-/engine_builder/last_build/log',
    ( log, el ) => el.$nodes = [cc.xterm( { text: log, label: 'Builder log' } )],
  ),
  a.br,
  app.collapse({
    label: 'Parameters',
    body: app.http(
      '/-/-/engine_builder/last_build/params',
      ( installation, el ) => el.$nodes = x.out( installation ),
    ),
  }),

]
