app.application = controller => (a,x) => [

  a.h3( controller.params.name ),

  a['div.row']( [
    a['div.col-3.pt-1.overflow-auto']( app.container.menu( controller, 'application' ) ),
    a['div.col-9'](
      controller.mount({
        routes: {
          '/?': app.application.show,
          '/memory': app.container.memory( 'application' ),
          '/environment*': app.container.environment( 'application' ),
          '/bindings*': app.container.bindings( 'application' ),
          '/actions*': app.container.actions( 'application' ),
          '/network': app.application.network,
          '/installation': app.application.installation,
          '/icon': app.application.icon,
          '/about': app.application.about,
          '/logs': app.container.logs( 'application' ),
          '/processes': app.container.processes( 'application' ),
          '/container': app.container.report( 'application' ),
          '/blueprint': app.application.blueprint,
          '/uninstall': app.application.uninstall,
        }
      })
    )
  ] )

]
