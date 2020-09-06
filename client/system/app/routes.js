app.routes = controller => controller.mount({
  routes: {
    '/login': app.login,
    '/logout': app.logout,
    '/timeout': app.timeout,
    '/disconnected': app.disconnected,
    '/reconnect': app.reconnect,
    '/settings': app.settings,
    '/update/os*': app.update_os,
    '/update*': app.update,
    '/restart*': app.restart,
    '/reboot*': app.reboot,
    '/shutdown': app.shutdown,
    '/shutdown/start': app.shutdown.start,
    '/shutdown/progress': app.shutdown.progress,
    '/shutdown/exit': app.shutdown.exit,
    '*': app.system,
  }
})
