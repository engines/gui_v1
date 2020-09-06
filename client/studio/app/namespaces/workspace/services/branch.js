app.namespaces.workspace.services.branch = controller => controller.mount({
  routes: {
    '/?': app.namespaces.workspace.services.branch.show,
    '/set': app.namespaces.workspace.services.branch.set,
    '/remove': app.namespaces.workspace.services.branch.remove,
  }
})
