ax.extension.report.field.extras.controls.
datetime = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let value = options.value
  let component

  if ( value ) {
    if ( options.only === 'time' ) {
      component = new Date( value ).toTimeString()
    } else if ( options.only === 'date' ) {
      component = new Date( value ).toDateString()
    } else {
      component = new Date( value ).toString()
    }
  } else {
    component = a.span(
      options.placeholder || 'None',
      { class: 'placeholder' }
    )
  }

  let controlTagOptions = {

    'data-name': options.name,
    tabindex: 0,
    $value: function() {
      return options.value
    },
    $focus: function () {
      this.focus()
    },

    ...options.controlTag,

  }

  return a['|appkit-report-control'](
    a['|appkit-report-datetime'](
      component,
      options.datetimeTag
    ),
    controlTagOptions
  )

}
