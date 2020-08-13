app.applications.blueprint.apache_httpd_configurations = blueprint => controller => (a,x) => [

  a.h5( 'Apache httpd configurations' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.apacheHttpdConfigurations,
    (f) => [
      f.field( {
        key: 'apache_httpd_configurations',
        as: 'many',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'content',
            as: 'codemirror',
            vertical: true,
            label: false,
          } ),
        ]
      } ),

    ]

  ),

]
