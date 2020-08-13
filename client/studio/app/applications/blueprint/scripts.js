app.applications.blueprint.scripts = blueprint => controller => (a,x) => [

  a.h5( 'Scripts' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.scripts,
    (f) => [
      'start',
      'install',
      'first_run',
      'post_install',
      'backup',
      'restore',
      'shutdown'
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
          code: {
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
