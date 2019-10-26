app.system.load = ( controller ) => (a,x) => a['app-system-menu'](
  [
    app.http(
      '/api/-/system/system_user/settings',
      ( result, el ) => {
        el.$('^app-view app-system-eventsource').$run()
        el.$nodes = app.system.menu( controller, result.content )
      },
    )
  ],
  {
    $on: {
      'axf.appkit.http.start': (e,el) => {
        // debugger
        x.appkit.lib.animate.fade.in( systemLoadingSpinner )
      },
      'axf.appkit.http.complete': (e,el) => {
        // debugger
        x.appkit.lib.animate.fade.out( systemLoadingSpinner )
      }
    }
  }
)
