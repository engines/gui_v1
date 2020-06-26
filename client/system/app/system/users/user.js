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
      '/aliases*': app.system.users.user.aliases,
      '/distributions*': app.system.users.user.distributions,
    }
  }),

]
