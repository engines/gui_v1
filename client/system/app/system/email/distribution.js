app.system.email.distribution = controller => (a,x) => [

  controller.mount({
    routes: {
      '/?': app.system.email.distribution.show,
      '/add': app.system.email.distribution.add,
      '/remove': app.system.email.distribution.remove,
      '/edit': app.system.email.distribution.edit,
      '/delete': app.system.email.distribution.delete,
    }
  })

]
