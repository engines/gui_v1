app.container.bindings.nonpersistent.registration.show = type => controller => (a,x) => [

  app.btn(
    app.icon( 'fas fa-caret-right', 'Register' ),
    () => controller.open('register', controller.query),
  ),
  a.br,

  app.btn(
    app.icon( 'fas fa-caret-right', 'Deregister' ),
    () => controller.open('deregister', controller.query),
  ),
  a.br,

  app.btn(
    app.icon( 'fas fa-caret-right', 'Reregister' ),
    () => controller.open('reregister', controller.query),
  ),

]
