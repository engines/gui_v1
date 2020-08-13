app.shutdown.exit = controller => (a,x) => [
  a.p('The system has shutdown.'),
  app.btn(
    app.icon( "fas fa-sync-alt", "Reconnect" ),
    () => location.assign('/')
  )
]
