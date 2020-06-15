app.routes = controller => controller.nest({
  routes: {
    '/login': app.login,
    '/logout': app.logout,
    '/timeout': app.timeout,
    '/disconnected': app.disconnected,
    '/reconnect': app.reconnect,
    '/restarting': app.restarting,
    '/updating/os': app.updating.os,
    '/updating': app.updating,
    '/settings': app.settings,
    '/?*': app.system,
  }
})
