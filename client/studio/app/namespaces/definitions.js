app.namespaces.definitions = controller => controller.mount({
  routes: {
    '/?': app.namespaces.definitions.index,
    '/query': app.namespaces.definitions.show,
  }
}),
