app.router = (a,x) => x.router(
  {
    routes: controller => [
      app.nav( controller ),
      app.system.eventsource,
      app.routes( controller ),
    ],
    lazy: true,
    transition: 'fade',
    default: controller => a['p.error']( [
      controller,
      `Not found: CLIENT ${ controller.path } in ${ controller.scope || 'root' }`
    ] ),
  }
)
