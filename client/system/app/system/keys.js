app.system.keys = controller => (a,x) => [

  a.h3( 'Keys' ),

  controller.nest({
    routes: {
      '/?': app.system.keys.index,
      // '/private': app.system.keys.private,
      // '/download': app.system.keys.download,
      // '/upload': app.system.keys.upload,
    }
  })

]
