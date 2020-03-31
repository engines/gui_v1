ax.extension.form.factory.
submit = ( f, options={} ) => {

  let label = options.label === false ? '' : options.label || '✔ Submit'

  let buttonOptions = {
    label: label,
    type: 'submit',
    name: options.name,
    value: options.value,
    onclick: options.onclick,
    // to: options.to,
    title: options.title,
    buttonTag: options.buttonTag,
    ...options.button
  }

  return f.button( buttonOptions )

}
