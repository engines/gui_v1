app.system.users.user.delete = controller => (a,x) => [

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    (account, el) => {
      el.$nodes = [

        account.email.mailbox ?
        [
          a.p('User cannot be deleted while email is enabled.'),
          app.btn(
            app.icon('fa fa-check', 'OK'),
            () => controller.open('..', controller.query)
          )
        ] :
        [

          app.http(
            '/-/-/system/uadmin/users/accounts/',
            () => controller.open('../..'),
            {
              method: 'DELETE',
              body: x.lib.query.stringify(
                { api_vars: {uid: controller.params.user_uid} },
              ),
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              placeholder: app.hourglass('Deleting user'),
            }
          )
        ]
      ]
    },
    {
      query: { uid: controller.params.user_uid },
      placeholder: app.hourglass('Loading email'),
    }
  ),

]
