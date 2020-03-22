ax.extension.report.factory.
checkboxes = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let value = x.lib.form.collection.value( options.value )
  let selections = x.lib.form.selections( options.selections )

  return a['|appkit-report-checkboxes'](
    selections.map( selection => {

      let label = selection.label

      if ( selection.disabled == 'hr' ) {
        label = '—————'
      } else if ( selection.disabled == 'br' ) {
        label =  ''
      }

      return x.check( {
        ...options,
        name: `${ options.name }[]`,
        value: value.includes( selection.value ) ? selection.value : '',
        label: label,
        checked: selection.value,
        readonly: 'readonly',
        inputTag: {
          tabindex: -1,
          disabled: 'disabled',
          ...options.inputTag
        },
      } )

    } ),
    options.checkboxesTag
  )

}
