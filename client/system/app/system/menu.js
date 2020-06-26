app.system.menu = ( system, controller ) => (a,x) => a['app-menu']([
  app.system.menu.system( system, controller ),
  app.system.menu.applications( controller ),
  app.system.menu.services( controller ),
])
