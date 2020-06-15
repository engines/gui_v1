app.applications.blueprint.workers = blueprint => controller => (a,x) => [

  a.h5( 'Workers' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.workers,
    (f) => [
      f.field( {
        key: 'blocking',
      } ),
      f.field( {
        key: 'commands',
        as: 'table',
        label: false,
        vertical: true,
        form: (ff) => [
          ff.field( {
            key: 'name',
          } ),
          ff.field( {
            key: 'command',
          } ),
        ]
      } ),

    ]

  ),

]
