app.system.email.default = controller => (a,x) => [

  a.h5( 'Default domain' ),

  app.http(
    `/-/-/system/uadmin/email`,
    (email, el) => {
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/default_domain',
        method: 'PUT',
        success: () => controller.open( '..' ),
        object: email,
        scope: 'api_vars',
        form: (f) => [
          f.field({
            key: 'default_domain',
            label: false,
            vertical: true,
            as: 'one',
            form: (f) => [
              f.field({
                key: 'name',
                label: false,
                vertical: true,
                as: 'select',
                selections: email.domains,
              }),
            ],
          }),
          f.buttons(),
        ]
      } )]
    }
  ),

]
