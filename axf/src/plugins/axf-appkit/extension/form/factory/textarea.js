ax.extension.form.factory.
textarea = function( options={} ) {

  let a = ax.a

  let textareaTagOptions = {
    name: options.name,
    required: options.required,
    placeholder: options.placeholder,
    ...options.textareaTag
  }

  return a.textarea( options.value, textareaTagOptions )

}
