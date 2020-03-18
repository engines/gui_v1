ax.extension.report.field.shim.controls.
checkboxes = function( r, options ) {

  let a = ax.a

  let checkboxesOptions = {
    ...options,
    ...options.checkboxes
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
    r.checkboxes( checkboxesOptions ),
    controlTagOptions
  )

}