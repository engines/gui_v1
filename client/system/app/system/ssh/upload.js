app.system.ssh.upload = controller => (a,x) => [

  x.filepond({filepond: {
    server: {
      url: `/-/upload/shh/public`,
      // process: {
      //   headers: {
      //     'Content-Type': 'application/octet-stream'
      //   }
      // }
    }
  }}),


]
