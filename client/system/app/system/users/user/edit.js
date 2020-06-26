app.system.users.user.edit = controller => (a,x) => [

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/users/accounts/',
      method: 'PUT',
      scope: 'api_vars',
      success: () => controller.open( '..', controller.query ),
      object: {
        uid: controller.params.user_uid,
        account: account,
      },
      form: f => [
        f.field( {
          key: 'uid',
          as: 'input/hidden',
        } ),
        f.field( {
          key: 'account',
          as: 'one',
          vertical: true,
          label: false,
          form: ff => ff.row( {
            columns: [
              ff.field( {
                key: 'first_name',
                vertical: true,
              } ),
              ff.field( {
                key: 'last_name',
                vertical: true,
              } ),
            ],
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
