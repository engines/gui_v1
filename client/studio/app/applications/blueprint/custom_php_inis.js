app.applications.blueprint.custom_php_inis = blueprint => controller => (a,x) => [

  a.h5( 'Custom PHP inis' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.customPhpInis,
    (f) => [
      f.field( {
        key: 'custom_php_inis',
        as: 'many',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'content',
            as: 'code',
            vertical: true,
            label: false,
            code: { mode: 'php' },
          } ),
        ]
      } ),

    ]

  ),

]
