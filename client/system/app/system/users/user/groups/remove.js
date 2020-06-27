app.system.users.user.groups.remove = controller => (a,x) => [

  a.h5( 'Remove groups' ),

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/uadmin/users/accounts/groups',
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
          key: 'group_dns',
          as: 'checkboxes',
          selections: account.groups.map((group) => [group.dn, group.name]),
          vertical: true,
          label: false,
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
