let enginesFieldV1 = ( variable ) => {

  let input = variable.input || {}
  let validation = input.validation || {}
  let collection = input.collection || {}
  let items = collection.items || {}
  let selections = {}

  for( let key of Object.keys( items ) ) {
    selections[`${ key }`] = `${ items[key] }`
  }

  let fieldV2 = {
    boolean: {as: 'checkbox'},
    check_boxes: {as: 'checkboxes'},
    checkboxes: {as: 'checkboxes'},
    checkbox: {as: 'checkbox'},
    checkbox_boolean: {as: 'checkbox'},
    date: {as: 'input', type: 'date'},
    datetime: {as: 'input', type: 'datetime'},
    decimal: {as: 'input', type: 'decimal'},
    email: {as: 'input', type: 'email'},
    // file: {as: 'input', type: 'file'},
    float: {as: 'input', type: 'number'},
    hidden: {as: 'input', type: 'hidden'},
    integer: {as: 'input', type: 'number'},
    language: {as: 'language'},
    password: {as: 'password'},
    password_with_confirmation: {as: 'password'},
    radio_buttons: {as: 'radios'},
    select: {as: 'select'},
    select_multiple: {as: 'multiselect'},
    select_with_input: {as: 'selectinput'},
    string: {as: 'input'},
    time: {as: 'input', type: 'time'},
    time_zone: {as: 'timezone'},
    tel: {as: 'input', type: 'tel'},
    text: {as: 'textarea'},
    url: {as: 'input', type: 'url'},
    // uuid: {as: 'input', type: 'url'},
  }[ input.type ] // || `${ input.type || '' }`

  return {
   key: `${ variable.name || '' }`,
   value: `${ variable.value || '' }`,
   as: fieldV2.as,
   type: fieldV2.type,
   // unchecked: input.type === 'checkbox_boolean' ? false : '',
   checked: fieldV2.as === 'checkbox' ? 'true' : undefined,
   confirmation: input.type === 'password_with_confirmation',
   label: `${ input.label || '' }`,
   required: variable.mandatory ? 'required' : undefined,
   pattern: `${ validation.pattern || '.*' }`,
   invalid: `${ validation.message || '' }`,
   help: `${ input.comment || '' }`,
   hint: `${ input.hint || '' }`,
   placeholder: input.placeholder ?
   `${ input.placeholder || '' }` :
   collection.include_blank ? ' ' : '',
   selections: selections,
   horizontal: true,
  }

}
