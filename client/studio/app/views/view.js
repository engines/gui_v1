app.views.view = ( parent, path ) => controller => controller.mount({
  routes: {
    '/?': app.views.show( parent, path ),
    '/edit': app.views.edit( parent, path ),
    '/delete*': app.views.delete( parent, path ),
  }
})
