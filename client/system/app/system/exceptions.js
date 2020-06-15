app.system.exceptions = controller => (a,x) => [
  a.h3( "Exceptions" ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),

  a({
    $tag: 'app-system-exceptions',
    $nodes: () => app.http(
      '/-/-/system/config/remote_exception_logging',
      (logging,el) => el.$nodes = [
        logging ?
        app.float({
          left: 'Remote exception logging is enabled.',
          right: app.btn(app.icon('fa fa-toggle-off', 'Disable'), () => {
            el.$nodes = () => [
              app.http(
                '/-/-/system/config/remote_exception_logging/disable',
                (result) => {
                  el.$('^app-system-exceptions').$render()
                },

                { method: 'POST' },
              )
            ]
          }),
        }) :
        app.float({
          left: 'Remote exception logging is disabled.',
          right: app.btn(app.icon('fa fa-toggle-on', 'Enable'), () => {
            el.$nodes = () => [
              app.http(
                '/-/-/system/config/remote_exception_logging/enable',
                (result) => {
                  el.$('^app-system-exceptions').$render()
                },

                { method: 'POST' },
              )
            ]
          }),
        })
      ]
    )
  }),


]
