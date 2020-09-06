cc.dialogue.builder.template = ( templateSpec, params ) => {

  try {
    return app.md( Mustache.render( templateSpec || '', params ) )
  } catch (e) {
    return (a,x) => a['.error']( e.message )
  }

}
