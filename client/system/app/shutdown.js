app.shutdown = controller => (a,x) => [
  a.h3( "Shutdown" ),
  controller.nest({
    routes: {
      '/?': app.shutdown.show,
      '/progress': app.shutdown.progress,
      '/exit': app.shutdown.exit,
    }
  })
]
