app.applications.blueprint.template_files = blueprint => controller => (a,x) => [

  a.h5( 'Template files' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.templateFiles,
    (f) => [
      f.field( {
        key: 'template_files',
        as: 'many',
        vertical: true,
        label: false,
        form: (ff) => [

          ff.field( {
            key: 'path',
            required: true,
            vertical: true,
            hint: 'Relative to /home/ ( except when path prefixed with /usr/local/ or /home/ ).',
          } ),

          ff.field( {
            key: 'content',
            as: 'codemirror',
            vertical: true,
            code: {
              mode: {
                value: app.codemirrorMode( ff.object.content_mode ),
                selections: app.selections.template_file_modes,
              },
            },
          } ),

        ]
      } ),

    ]

  ),

]
