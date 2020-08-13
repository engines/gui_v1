app.system.users.index = controller => (a,x) => [

  app.close( controller ),

  app.float({
    left: app.btn(
      app.icon( 'fa fa-plus', 'New' ),
      (e,el) => controller.open( 'new' )
    ),
    right: app.btn(
      app.icon( 'fas fa-user-friends', 'Groups' ),
      () => controller.open( 'groups', controller.query ),
    ),
  }),

  app.http(
    '/-/-/system/uadmin/users/accounts',
    ( accounts, el ) => {
      el.$nodes = [

        accounts.length ?
        accounts.map( account => a.div( app.btn (
          app.icon(
            'fa fa-caret-right',
            [
              `${account.name} `,
              a.small( account.uid ),
            ]
          ),
          () => controller.open( 'user', { user_uid: account.uid } )
        ) ) ) :
        a.i( 'None' ),

      ]
    },
    {
      placeholder: app.hourglass( 'Loading accounts' ),
    }
  ),

]
