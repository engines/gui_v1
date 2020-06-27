app.system.keys = controller => (a,x) => [

  a.h3( 'Keys' ),

  a.a('Regenerate private key', {href: '/-/download/ssh_keys/generate'}),
  a.br,
  a.a('Public key', {href: '/-/download/ssh_keys/public'}),
  // app.http('/-/download/ssh_keys/public'),


  // controller.nest({
  //   routes: {
  //     '/?': app.system.keys.index,
  //     // '/private': app.system.keys.private,
  //     // '/download': app.system.keys.download,
  //     // '/upload': app.system.keys.upload,
  //   }
  // })

]
