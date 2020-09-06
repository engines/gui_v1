app.system.users.user.groups.add = controller => (a,x) => [

  a.h5( 'Add groups' ),

  app.http(
    '/-/-/system/uadmin/users/accounts/groups/new',
    ( data, el ) => el.$nodes = [
      data.groups.length ?
      app.form( {
        url: '/-/-/system/uadmin/users/accounts/groups',
        scope: 'api_vars',
        success: () => controller.open( '..', controller.query ),
        form: f => [
          f.field({
            key: 'user_uid',
            as: 'hidden',
            value: controller.params.user_uid,
          }),
          f.field({
            key: 'group_dns',
            as: 'checkboxes',
            label: false,
            vertical: true,
            selections: data.groups.map((group) => [group.dn, group.name]),
          }),
          f.buttons(),
        ]
      } ) :
      [
        a.p(a.i('No more to add')),
        app.btn(
          app.icon('fa fa-check', 'OK'),
          () => controller.open('..', controller.query),
          { class: 'btn btn-primary' }
        )
      ]
    ],
    {
      query: {
        user_uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
