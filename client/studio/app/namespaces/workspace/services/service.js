app.namespaces.workspace.services.service = controller => (a,x) => [

  controller.routes( {
    '/?': app.namespaces.workspace.services.show,
    // '/:service_id*': app.namespaces.services.service( namespace ),
    // '/delete': app.namespaces.delete,
    // '/repo/?*': app.repo( 'namespace', `namespaces/${ controller.params.namespace_id }` ),
    // '/readme/?': app.readme( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    // '/license/?': app.license( 'namespace', `namespaces/${ controller.params.namespace_id }`),
    // '/definitions/?*': app.namespaces.definitions,
    // '/*': app.services,
    // '*': app.notFound
  }, {
    lazy: true,
  } ),

]
