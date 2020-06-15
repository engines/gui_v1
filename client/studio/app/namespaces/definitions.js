app.namespaces.definitions = controller => controller.nest({
  routes: {
    '/?': app.namespaces.definitions.index,
    '/query': app.namespaces.definitions.show,
  }
}),
