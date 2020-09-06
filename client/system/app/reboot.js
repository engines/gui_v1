app.reboot = controller => (a,x) => [
  a.h3( "Reboot" ),
  controller.mount({
    routes: {
      '/?': app.reboot.show,
      '/start': app.reboot.start,
      '/progress': app.reboot.progress,
    }
  })
]
