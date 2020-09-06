app.namespaces.workspace.services = namespace => controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.namespaces.workspace.services.index,
      '/new': app.namespaces.workspace.services.new,
      '/:service_id*': app.namespaces.workspace.services.service( namespace ),
    }
  }),

]
