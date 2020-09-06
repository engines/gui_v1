app.system.users = controller => (a,x) => [

  a.h3( 'Users' ),

  controller.mount({
    routes: {
      '/?': app.system.users.index,
      '/new': app.system.users.new,
      '/user*': app.system.users.user,
      '/groups/?': app.system.users.groups.index,
      '/groups/group': app.system.users.groups.show,
    }
  })

]
