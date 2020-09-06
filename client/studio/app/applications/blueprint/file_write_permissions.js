app.applications.blueprint.file_write_permissions = blueprint => controller => (a,x) => [

  a.h5( 'File write permissions' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.fileWritePermissions,
    (f) => [
      f.field( {
        key: 'file_write_permissions',
        as: 'table',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'path',
            required: true,
            thTag: {
              width: null,
            },
          } ),
          ff.field( {
            key: 'recursive',
            as: 'checkbox',
            thTag: {
              width: '75px',
            },
          } ),
        ]
      } ),

    ]

  ),

]
