cc.dialogue.builder.navigation.component = ( componentSpec, params ) => {

  if ( componentSpec.type == 'menu' ) {
    return cc.dialogue.builder.navigation.menu( componentSpec.menu || {}, params )
  } else if ( componentSpec.type == 'button' ) {
    return cc.dialogue.builder.navigation.button( componentSpec.button || {}, params )
  } else if ( componentSpec.type == 'row' ) {
    return cc.dialogue.builder.navigation.row( componentSpec.row || {}, params )
  }

}
