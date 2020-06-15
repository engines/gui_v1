cc.dialogue.builder.output = ( output, params ) => {

  let x = ax.x

  let value

  if ( output.dig ) {
    let keys = output.dig.split( '.' )
    value = x.lib.object.dig( params, keys )
  } else {
    value = params
  }

  return x.out( value )

}
