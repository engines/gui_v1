app.namespaces.workspace.services = namespace => controller => (a,x) => [

  controller.nest({
    routes: {
      '/?': app.namespaces.workspace.services.index,
      '/new': app.namespaces.workspace.services.new,
      '/:service_id*': app.namespaces.workspace.services.service( namespace ),
      // '/delete': app.namespaces.delete,
      // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
      // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
      // '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
      // '/definitions/?*': app.namespaces.definitions,
      // '/*': app.services,
      // '*': app.notFound
    }
  }),

]
