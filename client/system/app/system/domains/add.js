app.system.domains.add = controller => (a,x) => [

  a.h5( 'Add' ),

  app.form( {
    url: '/-/-/system/domains/',
    success: () => controller.open( '..' ),
    scope: 'api_vars',
    form: (f) => [

      f.field( {
        key: 'domain_name',
        label: false,
        vertical: true,
        required: 'required',
      } ),

      f.field( {
        key: 'self_hosted',
        as: 'checkbox',
      } ),

      f.field( {
        key: 'internal_only',
        as: 'checkbox',
      } ),

      f.buttons(),


    ]
  } )

]
