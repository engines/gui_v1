app.namespaces = controller => controller.mount({
  routes: {
    '/?': app.namespaces.index,
    '/new': app.namespaces.new,
    '/:namespace_id*': app.namespaces.namespace,
  }
})
