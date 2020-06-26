app.system.email = controller => (a,x) => [

  a.h3('Email'),

  controller.nest({
    routes: {
      '/?': app.system.email.show,
      '/setup': app.system.email.setup,
      '/default': app.system.email.default,
      '/new': app.system.email.distribution.new,
      '/distribution*': app.system.email.distribution,
      '/domains*': app.system.email.domains,
      '/addresses': app.system.email.addresses,
    }
  })

]
