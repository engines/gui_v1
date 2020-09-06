app.system.users.user.delete = controller => (a,x) => [

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    (account, el) => {
      el.$nodes = [

        (account.email.mailbox || account.groups.length) ?
        [
          a.p('User cannot be deleted when a member of groups or email is enabled.'),
          app.btn(
            app.icon('fa fa-check', 'OK'),
            () => controller.open('..', controller.query),
            { class: 'btn btn-primary' }
          )
        ] :
        [
          a.p('Are you sure that you want to delete this user?'),

          app.form( {
            url: '/-/-/system/uadmin/users/accounts/',
            method: 'DELETE',
            scope: 'api_vars',
            success: () => controller.open('../..'),
            form: f => [
              f.field({
                key: 'uid',
                as: 'hidden',
                value: controller.params.user_uid,
              }),
              f.buttons(),
            ]
          } ),

        ]
      ]
    },
    {
      query: { uid: controller.params.user_uid },
      placeholder: app.hourglass('Loading email'),
    }
  ),

]
