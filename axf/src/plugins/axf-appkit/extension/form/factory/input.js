ax.extension.form.factory.
input = function( options={} ) {

  let a = ax.a

  let inputTagOptions = {
    name: options.name,
    value: options.value,
    type: options.type,
    required: options.required,
    readonly: options.readonly,
    pattern: options.pattern,
    minlength: options.minlength,
    maxlength: options.maxlength,
    min: options.min,
    max: options.max,
    step: options.step,
    placeholder: options.placeholder,
    autocomplete: options.autocomplete,
    multiple: options.multiple,
    ...options.inputTag
  }

  return a.input( this.select.options( options ), inputTagOptions )

}
