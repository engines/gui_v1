cc.dialogue.builder.report.field = ( r, fieldSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let field = {
    key: fieldSpec.key,
    value: params[fieldSpec.key],
    layout: fieldSpec.layout,
    help: fieldSpec.help,
    hint: fieldSpec.hint,
    layout: fieldSpec.layout,
    // item: fieldSpec.item,
    // confirmation: fieldSpec.confirmation,
    dependent: fieldSpec.dependent,
    placeholder: fieldSpec.placeholder,
  }

  if ( fieldSpec.components ) {
    let componentsSpec = Object.values( fieldSpec.components || {} )
    field.report = (rr) => componentsSpec.map(
      componentSpec => cc.dialogue.builder.report.
        component( rr, componentSpec, params )
    )
  }

  if ( fieldSpec.selections ) {
    let selectionsSpec = fieldSpec.selections
    if ( selectionsSpec.type == 'dynamic' && selectionsSpec.key ) {
      let match = selectionsSpec.key.match( /\[?\w+\]?/g ).map(
        part => part.match( /\w+/ )[0]
      )
      field.selections = x.lib.object.dig( params, match )
    } else {
      field.selections = Object.values( selectionsSpec.static || {} )
    }
  }

  let label = fieldSpec.label || {}
  if ( label.display == 'custom' ) {
    field.label = label.custom
  } else if ( label.display == 'none' ) {
    field.label = false
  }

  let controlTypes = {
    string: { as: 'string' },
    text: { as: 'textarea' },
    preformatted: { as: 'preformatted' },
    select: { as: 'select' },
    boolean: { as: 'boolean' },
    checkbox: { as: 'checkbox' },
    checkboxes: { as: 'checkboxes' },
    radios: { as: 'radios' },
    password: { as: 'password' },
    color: { as: 'color' },
    datetime: { as: 'datetime' },
    email: { as: 'email' },
    number: { as: 'number' },
    tel: { as: 'tel' },
    url: { as: 'url' },
    json: { as: 'json' },
    output: { as: 'output' },
    country: { as: 'country' },
    language: { as: 'language' },
    timezone: { as: 'timezone' },
    markdown: { as: 'markdown' },
    code: { as: 'codemirror' },
    terminal: { as: 'xtermjs' },
    one: { as: 'one' },
    many: { as: 'many' },
    table: { as: 'table' },
  }

  let as = fieldSpec.as || 'string'
  let controlType = controlTypes[as]
  field.as = controlType.as
  field.control = fieldSpec.control

  return r.field( field )

}
