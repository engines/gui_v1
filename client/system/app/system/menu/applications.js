app.system.menu.
applications = controller => (a,x) => app.http(
  '/-/-/containers/engines/status',
  ( applications, el ) => el.$nodes = [
    a['div.container']( [
      a.hr,
      a['app-system-applications']( [
        app.btn(
          app.icon( 'fa fa-plus', 'Install' ),
          (e,el) => controller.open( '/install' ),
          {
            class: 'btn app-btn d-block w-100 text-left',
          }
        ),
        a['app-system-containers']( Object.keys( applications ).sort().map(
          name => app.system.menu.applications.application( controller, name, applications[name] )
        ) )
      ] ),
    ] )
  ]
)
