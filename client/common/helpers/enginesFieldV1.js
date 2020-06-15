let enginesFieldV1 = ( variable ) => {

  let input = variable.input || {}
  let validation = input.validation || {}
  let collection = input.collection || {}
  let items = collection.items || {}
  let selections = {}

  for( let key of Object.keys( items ) ) {
    selections[`${ key }`] = `${ items[key] }`
  }

  let as = {
    boolean: 'checkbox',
    check_boxes: 'checkboxes',
    checkboxes: 'checkboxes',
    checkbox: 'checkbox',
    checkbox_boolean: 'checkbox',
    date: 'input/date',
    datetime: 'input/datetime',
    decimal: 'input/decimal',
    email: 'input/email',
    // file: 'input/file',
    float: 'input/number',
    hidden: 'input/hidden',
    integer: 'input/number',
    language: 'language',
    password: 'password',
    password_with_confirmation: 'password',
    radio_buttons: 'radios',
    select: 'select',
    select_multiple: 'multiselect',
    select_with_input: 'selectinput',
    string: 'input',
    time: 'input/time',
    time_zone: 'timezone',
    tel: 'input/tel',
    text: 'textarea',
    url: 'input/url',
    uuid: 'input/url',
  }[ input.type ] // || `${ input.type || '' }`

  return {
   key: `${ variable.name || '' }`,
   value: `${ variable.value || '' }`,
   as: as,
   // unchecked: input.type === 'checkbox_boolean' ? false : '',
   checked: as === 'checkbox' ? 'true' : undefined,
   confirmation: input.type === 'password_with_confirmation',
   label: `${ input.label || '' }`,
   required: variable.mandatory ? 'required' : undefined,
   pattern: `${ validation.pattern || '' }`,
   invalid: `${ validation.message || '' }`,
   help: `${ input.comment || '' }`,
   hint: `${ input.hint || '' }`,
   placeholder: input.placeholder ?
   `${ input.placeholder || '' }` :
   collection.include_blank ? ' ' : '',
   selections: selections,
  }

}
