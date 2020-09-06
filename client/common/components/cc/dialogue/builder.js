cc.dialogue.builder = function( components, params={}, options={} ) {

  return ( components || [] ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'template' ) {
      return cc.dialogue.builder.template( componentSpec.template || {}, params )
    } else if ( componentSpec.type == 'form' ) {
      return cc.dialogue.builder.form( componentSpec.form || {}, params, options )
    } else if ( componentSpec.type == 'report' ) {
      return cc.dialogue.builder.report( componentSpec.report || {}, params, options )
    } else if ( componentSpec.type == 'output' ) {
      return cc.dialogue.builder.output( componentSpec.output || {}, params, options )
    } else if ( componentSpec.type == 'navigation' ) {
      
      return cc.dialogue.builder.navigation( componentSpec.navigation || {}, params, options )
    } else {
      return null
    }

  } )

}
