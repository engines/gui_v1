app.restart = controller => (a,x) => [
  a.h3( "Restart" ),
  controller.nest({
    routes: {
      '/?': app.restart.show,
      '/start': app.restart.start,
      '/progress': app.restart.progress,
    }
  })
]
