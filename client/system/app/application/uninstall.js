app.application.uninstall = controller => (a,x) => [

  a.h3('Uninstall'),

  controller.mount({
    routes: {
      '/?': app.application.uninstall.show,
      '/keep*': app.application.uninstall.keep,
      '/destroy*': app.application.uninstall.destroy,
    }
  })

]
