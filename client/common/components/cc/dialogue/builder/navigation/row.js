cc.dialogue.builder.navigation.row = ( rowSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let columns

  if ( rowSpec.columns ) {
    let columnsSpec = rowSpec.columns || []
    columns = columnsSpec.map(
    (columnSpec) =>
      a['div.col-sm'](
        columnSpec.components.map(
          (componentSpec) =>
            cc.dialogue.builder.navigation.component( componentSpec, params )
        )
      )
    )
  }

  return a['div.row'](columns || [])

}
