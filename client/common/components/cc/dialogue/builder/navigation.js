cc.dialogue.builder.navigation = ( navigationSpec, params ) => {

  let components = Object.values( navigationSpec.components || {} )

  return ( components || [] ).map( ( componentSpec ) => {
    return cc.dialogue.builder.navigation.component( componentSpec, params )
  } )

}
