app.system.orphans = controller => (a,x) => [

  a.h3( 'Orphans' ),

  controller.nest({
    routes: {
      '/?': app.system.orphans.index,
      '/orphan/?': app.system.orphans.show,
      '/orphan/delete/?': app.system.orphans.delete,
    }
  })

]
