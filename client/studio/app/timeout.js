app.timeout = controller => (a,x) => [
  a.h3( "Timed out" ),
  app.button( {
    label: app.icon( "fas fa-sign-in-alt", "Login" ),
    onclick: () => controller.load( '/login' )
  } )
]
