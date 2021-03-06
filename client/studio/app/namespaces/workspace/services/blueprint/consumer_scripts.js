app.namespaces.workspace.services.blueprint.consumer_scripts = blueprint => controller => (a,x) => [

  a.h5( 'Consumer scripts' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.consumerScripts,
    (f) => [
      'add',
      'add_sudo',
      'update',
      'update_sudo',
      'remove',
      'remove_sudo',
    ].map( script => f.field( {
      key: script,
      as: 'one',
      vertical: true,
      form: (ff) => [
        ff.field( {
          key: 'content',
          as: 'codemirror',
          vertical: true,
          label: false,
          control: {
            mode: {
              value: ff.object.content_mode,
              selections: app.selections.script_modes,
            },
          },
        } ),
      ]
    } ) )

  ),

]
