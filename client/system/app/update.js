app.update = controller => (a,x) => [
  a.h3( "Update system" ),
  controller.nest({
    routes: {
      '/?': app.update.show,
      '/start': app.update.start,
      '/progress': app.update.progress,
    }
  })
]
