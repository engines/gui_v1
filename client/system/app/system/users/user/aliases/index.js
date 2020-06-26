app.system.users.user.aliases.index = controller => (a,x) => [

  a.h5( 'Aliases' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, {query: controller.query} ),
    ] )
  ),

  app.http(
    '/-/-/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [
      app.btn(
        app.icon( 'fa fa-plus' ),
        (e,el) => controller.open( 'add', controller.query )
      ),
      app.btn(
        app.icon( 'fa fa-minus' ),
        (e,el) => controller.open( 'remove', controller.query )
      ),

      x.out(account.email.aliases),
    ],
    {
      query: {
        uid: controller.params.user_uid,
      },
      placeholder: app.hourglass( 'Loading email' ),
    }
  ),

]
