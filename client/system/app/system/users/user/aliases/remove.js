app.system.users.user.aliases.remove = controller => (a,x) => [

  a.h5( 'Remove alias' ),

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/users/accounts/email/aliases/',
      method: 'DELETE',
      scope: 'api_vars',
      success: () => controller.open( '..', controller.query ),
      form: f => [
        f.field({
          key: 'user_uid',
          as: 'hidden',
          value: account.uid,
        }),
        f.field({
          key: 'address',
          as: 'select',
          selections: account.email.aliases,
          vertical: true,
          label: false,
          placeholder: 'Select alias',
        }),
        f.buttons(),
      ]
    } )],
    {
      query: {
        uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
