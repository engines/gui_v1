app.system.menu.
services = controller => (a,x) => app.http(
  '/-/-/containers/services/status',
  ( services, el ) => el.$nodes = [
    a['div.container']( [
      a.hr,
      a['app-menu-buttons'](
        Object.keys( services ).sort().map(
          name => app.system.menu.services.service( controller, name, services[name] )
        )
      ),
    ] )
  ]
)
