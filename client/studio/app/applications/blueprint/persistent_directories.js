app.applications.blueprint.persistent_directories = blueprint => controller => (a,x) => [

  a.h5( 'Persistent directories' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.persistentDirectories,
    (f) => [
      f.field( {
        key: 'persistent_directories',
        as: 'table',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'path',
            required: true,
          } ),
          ff.field( {
            key: 'volume_name',
          } ),
        ]
      } ),

    ]

  ),

]
