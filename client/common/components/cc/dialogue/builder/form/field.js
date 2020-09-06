cc.dialogue.builder.form.field = ( f, fieldSpec, params ) => {

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

  let as = fieldSpec.control || 'string'
  let controlType = controlTypes[as]
  let validation = fieldSpec.validation || {}

  // replace empty strings with undefined
  let field = {
    as: controlType.as,
    type: controlType.type,
    key: fieldSpec.key,
    value: fieldSpec.value || undefined,
    layout: fieldSpec.layout || undefined,
    help: fieldSpec.help || undefined,
    hint: fieldSpec.hint || undefined,
    collection: fieldSpec.collection || undefined,
    singular: fieldSpec.singular || undefined,
    confined: fieldSpec.confined || undefined,
    stationary: fieldSpec.stationary || undefined,
    placeholder: fieldSpec.placeholder || undefined,
    required: validation.required || undefined,
    pattern: validation.pattern || undefined,
    min: validation.min || undefined,
    max: validation.max || undefined,
    minlength: validation.minlength || undefined,
    maxlength: validation.maxlength || undefined,
    step: validation.step || undefined,
    invalid: validation.message || undefined,
  }

  if ( fieldSpec.dependent ) {
    let dependentsSpec = Object.values( fieldSpec.dependent || {} )
    field.dependent = dependentsSpec.map((dependentSpec) => ({
      key: dependentSpec.target,
      pattern: dependentSpec.pattern
    }))
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

  return f.field( field )

}
