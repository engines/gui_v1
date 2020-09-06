cc.dialogue.builder.form.component = ( f, componentSpec, params ) => {

  if ( componentSpec.type == 'field' ) {
    return cc.dialogue.builder.form.field( f, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return cc.dialogue.builder.form.fieldset( f, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return cc.dialogue.builder.form.row( f, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return cc.dialogue.builder.form.template( f, componentSpec.template, params )
  }

}
