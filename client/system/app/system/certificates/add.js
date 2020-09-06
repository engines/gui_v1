app.system.certificates.add = controller => (a,x) => [

  a.h5( 'Add' ),

  app.form( {
    url: '/-/-/system/certs/',
    success: () => controller.open( '..' ),
    scope: 'api_vars',
    form: (f) => [

      f.field( {
        key: 'certificate_name',
        label: false,
        vertical: true,
        required: 'required',
      } ),

      f.field( {
        key: 'self_hosted',
        as: 'checkbox',
        checked: 'true',
      } ),

      f.field( {
        key: 'internal_only',
        as: 'checkbox',
        checked: 'true',
      } ),

      f.buttons(),

    ],

  } )

]
