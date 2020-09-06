app.system.users.user.emailable = controller => (a,x) => [

  a.h5( 'Enable email' ),
  app.http(
    '/-/-/system/uadmin/email',
    ( email, el ) => {
      el.$nodes = [
        email.default_domain ?
        app.form({
          object: {
            user_uid: controller.params.user_uid,
            email: {
              domain_name: email.default_domain,
            },
          },
          action: '/-/-/system/uadmin/users/accounts/email',
          success: () => controller.open('..', controller.query),
          scope: 'api_vars',
          form: (f) => [
            f.field({
              key: 'user_uid',
              as: 'hidden',
            }),
            f.field({
              key: 'email',
              as: 'one',
              label: false,
              vertical: true,
              form: (f) => [
                f.field({
                  key: 'domain_name',
                  as: 'select',
                  selections: email.domains,
                }),
              ]
            }),
            f.buttons({
              router: controller,
            })
          ]
        }) :
        [
          a.p('Setup email first.'),
          app.close( controller, { query: controller.query } ),
        ]
      ]
    },
    {
      query: { user_uid: controller.params.user_uid },
      placeholder: app.hourglass( 'Loading email' )
    }

  ),

]
