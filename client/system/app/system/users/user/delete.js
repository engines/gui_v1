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
              query: { uid: controller.params.user_uid },
              placeholder: app.hourglass('Deleteing user'),
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
