cc.dialogue.builder.navigation.menu = ( menuSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let components

  let componentsSpec = menuSpec.components || []
  components = componentsSpec.map(
    (componentSpec) =>
    cc.dialogue.builder.navigation.component( componentSpec, params )
  )

  let labelSpec = menuSpec.label || {}
  let label
  if (labelSpec.display == 'none') {
    label = ''
  } else if (labelSpec.display == 'custom') {
    label = labelSpec.custom || ''
  } else {
    label = 'Menu'
  }

  let button = {
    class: `btn app-btn btn-${menuSpec.style}`,
  }

  let bodyTag = {
    class: 'ml-1',
  }

  return app.collapse({
    label: label,
    body: components,
    button: button,
    bodyTag: bodyTag,
  })

}
