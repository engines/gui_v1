app.system.menu.
applications = controller => (a,x) => a({
  $tag: 'app-menu-applications',
  $nodes: () => app.http(
    '/-/-/containers/engines/status',
    ( applications, el ) => el.$nodes = [
      a['div.container']( [
        a.hr,
        Object.keys( applications ).length ?
        a['app-menu-buttons']( Object.keys( applications ).sort().map(
          name => app.system.menu.applications.application( controller, name, applications[name] )
        ) ) : a.i('No apps'),
      ] )
    ]
  ),
})
