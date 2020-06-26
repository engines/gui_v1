app.system.users.user.mailbox.edit = controller => (a,x) => [

  app.http(
    '/-/-/system/uadmin/users/accounts/email/edit',
    ( mailbox, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/users/accounts/email',
      method: 'PUT',
      scope: 'api_vars',
      success: () => controller.open( '..', controller.query ),
      object: {
        user_uid: controller.params.user_uid,
        email: {
          domain_name: mailbox.domain_name,
        },
      },
      form: f => [
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
              selections: mailbox.email_domains,
            }),
          ]
        }),
        f.buttons(),
      ]
    } )],
    {
      query: {
        user_uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading email' ),
    }
  ),

]
