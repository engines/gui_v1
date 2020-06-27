app.system.users.user.password = controller => (a,x) => [

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/users/accounts/password',
      method: 'PUT',
      scope: 'api_vars',
      success: () => controller.open( '..', controller.query ),
      form: f => [
        f.field( {
          key: 'user_uid',
          as: 'input/hidden',
          value: account.uid,
        } ),
        f.field( {
          key: 'password',
          as: 'one',
          vertical: true,
          label: false,
          form: ff => ff.field( {
            key: 'new',
            as: 'password',
            vertical: true,
            label: false,
            confirmation: true,
          } ),
        } ),
        f.buttons(),
      ]
    } )],
    {
      query: { uid: controller.params.user_uid },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
