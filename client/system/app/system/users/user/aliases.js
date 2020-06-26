app.system.users.user.aliases = (controller) => (a, x) => [

  controller.nest({
    routes: {
      '/?': app.system.users.user.aliases.index,
      '/add': app.system.users.user.aliases.add,
      '/remove': app.system.users.user.aliases.remove,
    }
  }),

]
