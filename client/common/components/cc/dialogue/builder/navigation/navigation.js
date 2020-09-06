cc.dialogue.builder.navigation.navigation = ( options={} ) => (a,x) => {

  let components = (r) => ( options.components || [] ).map(
    ( componentSpec ) => cc.dialogue.builder.navigation.component( r, componentSpec, options.params )
  )

  return cc.navigation( {
    navigation: components,
    params: options.params,
    object: options.object,
  } )

}
