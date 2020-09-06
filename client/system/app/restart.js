app.restart = controller => (a,x) => [
  a.h3( "Restart" ),
  controller.mount({
    routes: {
      '/?': app.restart.start,
      '/progress': app.restart.progress,
    }
  })
]
