app.views = ( parent, path ) => controller => controller.mount({
  routes: {
    '/?': app.views.index( parent, path ),
    '/new': app.views.new( parent, path ),
    '/:view_id/?*': app.views.view( parent, path ),
  }
})
