app.system.menu.
applications = controller => (a,x) => a({
  $tag: 'app-menu-applications',
  $nodes: () => app.http(
    '/-/-/containers/engines/status',
    ( applications, el ) => el.$nodes = [
      a['div.container']( [
        a.hr,
        // app.btn(
        //   app.icon( 'fa fa-plus', 'Install' ),
        //   (e,el) => controller.open( '/install' ),
        //   {
        //     class: 'btn app-btn d-block w-100 text-left',
        //   }
        // ),
        a['app-menu-buttons']( Object.keys( applications ).sort().map(
          name => app.system.menu.applications.application( controller, name, applications[name] )
        ) )
      ] )
    ]
  ),
})
