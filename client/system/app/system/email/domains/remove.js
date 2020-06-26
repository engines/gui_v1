app.system.email.domains.remove = controller => (a,x) => [

  a.h5( 'Remove domain' ),

  app.http(
    '/-/-/system/uadmin/email',
    (email, el) => {
      el.$nodes = [app.form( {
        url: '/-/-/system/uadmin/email/domains/',
        method: 'DELETE',
        success: () => controller.open('..'),
        scope: 'api_vars',
        form: (f) => [
          f.field({
            key: 'name',
            as: 'select',
            label: false,
            vertical: true,
            selections: email.domains,
          }),
          f.buttons(),
        ]
      } )]
    }
  ),

]
