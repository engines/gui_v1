app.system.users.user = controller => (a,x) => [

  a.h5( controller.params.user_uid ),

  controller.nest({
    routes: {
      '/?': app.system.users.user.show,
      '/edit': app.system.users.user.edit,
      '/password': app.system.users.user.password,
      '/emailable': app.system.users.user.emailable,
      '/domain': app.system.users.user.mailbox.edit,
      '/disable': app.system.users.user.mailbox.disable,
      '/mailbox': app.system.users.user.mailbox,
      '/add_group': app.system.users.user.groups.add,
      '/remove_group': app.system.users.user.groups.remove,
      '/add_alias': app.system.users.user.aliases.add,
      '/remove_alias': app.system.users.user.aliases.remove,
      '/add_distribution': app.system.users.user.distributions.add,
      '/remove_distribution': app.system.users.user.distributions.remove,
      '/delete': app.system.users.user.delete,
    }
  }),

]
