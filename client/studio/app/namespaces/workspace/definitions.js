app.namespaces.workspace.definitions = controller => controller.mount({
  routes: {
    '/?': app.namespaces.workspace.definitions.index,
    '/query': app.namespaces.workspace.definitions.show,
    '/query/delete': app.namespaces.workspace.definitions.delete,
  }
}),
