app.applications = controller => controller.mount( {
  routes: {
    '/?': app.applications.index,
    '/new': app.applications.new,
    '/:application_id*': app.applications.application,
  },
  lazy: true,
} )
