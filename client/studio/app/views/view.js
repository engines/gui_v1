app.views.view = ( parent, path ) => controller => controller.nest({
  routes: {
    '/?': app.views.show( parent, path ),
    '/edit': app.views.edit( parent, path ),
    '/delete*': app.views.delete( parent, path ),
  }
})
