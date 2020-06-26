app.container.actions.index = ( controller, actions ) => (a,x) => [
  actions.length ?
  actions.map( action => a.div( [
    app.btn(
      app.icon( 'fa fa-caret-right', ( action.label || action.name ) ),
      () => controller.open( action.name ),
    ),
  ] ) ) :
  a.i( 'None' )
]
