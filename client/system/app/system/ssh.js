app.system.ssh = controller => (a,x) => [
  app.close( controller ),

  a.h3( 'SSH key' ),

  controller.mount({
    routes: {
      '/?': app.system.ssh.show,
      '/generate': app.system.ssh.generate,
      '/upload': app.system.ssh.upload,
    }
  })

];
