app.system.users.user.mailbox.disable = controller => (a,x) => [

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [
      (
        account.email.aliases.length ||
        account.email.distribution_groups.length
      ) ?
      [
        a.p('Mailbox cannot be disabled while it is associated with aliases or distributions.'),
        app.btn(
          app.icon('fa fa-check', 'OK'),
          () => controller.open('..', controller.query),
          { class: 'btn btn-primary' }
        )
      ] :
      app.http(
        '/-/-/system/uadmin/users/accounts/email',
        () => controller.open( '..', controller.query ),
        {
          method: 'DELETE',
          query: {
            user_uid: controller.params.user_uid,
          },
          placeholder: app.hourglass( 'Disabling email' ),
        }
      ),
    ],
    {
      query: {
        uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading email' ),
    }
  ),

]
