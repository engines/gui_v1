app.namespaces.workspace.branch = controller => controller.mount({
  routes: {
    '/?': app.namespaces.workspace.branch.show,
    '/set': app.namespaces.workspace.branch.set,
    '/remove': app.namespaces.workspace.branch.remove,
  }
})
