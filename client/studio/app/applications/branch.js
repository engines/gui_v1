app.applications.branch = controller => controller.nest({
  routes: {
    '/?': app.applications.branch.show,
    '/set': app.applications.branch.set,
    '/remove': app.applications.branch.remove,
  }
})
