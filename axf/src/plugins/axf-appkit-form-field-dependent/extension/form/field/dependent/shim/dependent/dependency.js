ax.extension.form.field.dependent.shim.
dependent.dependency = ( el, options ) => {

  let lib = ax.x.lib.field

  let selector

  if ( options.selector ) {
    selector = options.selector
  } else {
    let name = options.name
    selector = `[name="${ name }"]`
  }

  let search = options.search || '^form'

  let target = el.$( search ).$( selector )
  let targetDependency

  if ( target ) {
    targetDependency = target.$('^|appkit-form-field-dependent')
  }

  if ( targetDependency ) {
    return targetDependency
  } else {
    console.error( `Form field failed to find a dependency target using options:`, options )
  }

}
