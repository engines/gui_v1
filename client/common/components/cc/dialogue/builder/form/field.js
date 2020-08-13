cc.dialogue.builder.form.field = ( f, fieldSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let field = {
    key: fieldSpec.key,
    value: fieldSpec.value,
    layout: fieldSpec.layout,
    help: fieldSpec.help,
    hint: fieldSpec.hint,
    layout: fieldSpec.layout,
    collection: fieldSpec.collection,
    singular: fieldSpec.singular,
    confined: fieldSpec.confined,
    stationary: fieldSpec.stationary,
    confirmation: fieldSpec.confirmation,
    dependent: fieldSpec.dependent,
    placeholder: fieldSpec.placeholder,
  }

  if ( fieldSpec.components ) {
    let componentsSpec = Object.values( fieldSpec.components || {} )
    field.form = (ff) => componentsSpec.map(
      componentSpec => cc.dialogue.builder.form.component( ff, componentSpec, params )
    )
  }

  if ( fieldSpec.selections ) {
    let selectionsSpec = fieldSpec.selections
    if ( selectionsSpec.type === 'dynamic' && selectionsSpec.dig ) {
      let match = selectionsSpec.dig.match( /\w+/g )
      field.selections = x.lib.object.dig( params, match )
    } else {
      field.selections = Object.values( selectionsSpec.static || {} )
    }
  }

  if ( fieldSpec.datalist ) {
    let datalistSpec = fieldSpec.datalist
    if ( datalistSpec.type === 'dynamic' && datalistSpec.dig ) {
      let match = datalistSpec.dig.match( /\w+/g )
      field.datalist = x.lib.object.dig( params, match )
    } else {
      field.datalist = Object.values( datalistSpec.static || {} )
    }
  }

  let label = fieldSpec.label || {}
  if ( label.type === 'custom' ) {
    field.label = label.custom
  } else if ( label.type === 'none' ) {
    field.label = false
  }

  let controlTypes = {
    string: { as: 'input', type: 'text' },
    select: { as: 'select' },
    text: { as: 'textarea' },
    checkbox: { as: 'checkbox' },
    checkboxes: { as: 'checkboxes' },
    radios: { as: 'radios' },
    hidden: { as: 'input', type: 'hidden' },
    password: { as: 'password' },
    combobox: { as: 'combobox' },
    multiselect: { as: 'multiselect' },
    color: { as: 'input', type: 'color' },
    date: { as: 'input', type: 'date' },
    email: { as: 'input', type: 'email' },
    number: { as: 'input', type: 'number' },
    tel: { as: 'input', type: 'tel' },
    time: { as: 'input', type: 'time' },
    url: { as: 'input', type: 'url' },
    code: { as: 'codemirror' },
    markdown: { as: 'easymde' },
    country: { as: 'country' },
    language: { as: 'language' },
    timezone: { as: 'timezone' },
    json: { as: 'json' },
    one: { as: 'one' },
    many: { as: 'many' },
    table: { as: 'table' },
  }

  let as = fieldSpec.as || 'string'
  let controlType = controlTypes[as]
  field.as = controlType.as
  field.type = controlType.type
  field.control = fieldSpec.control

  let validation = fieldSpec.validation || {}
  field.required = validation.required || undefined
  field.pattern = validation.pattern || undefined
  field.min = validation.min || undefined
  field.max = validation.max || undefined
  field.minlength = validation.minlength || undefined
  field.maxlength = validation.maxlength || undefined
  field.step = validation.step || undefined
  field.invalid = validation.message || undefined

  return f.field( field )

}
