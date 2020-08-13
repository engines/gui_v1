app.update_os = controller => (a,x) => [
  a.h3( "Update OS" ),
  controller.nest({
    routes: {
      '/?': app.update_os.show,
      '/start': app.update_os.start,
      '/progress': app.update_os.progress,
    }
  })
]
