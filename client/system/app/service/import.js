app.service.import = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( `Import` ),
    app.close( controller ),
    a.br,

    x.filepond({filepond: {
      // onerror: (e) => alert(`aaa ${JSON.stringify(e)}`),
      server: {
        url: `/-/upload/service/${ name }`,
        process: {
          headers: {
            'Content-Type': 'application/octet-stream'
          }
        }
      }
    }}),

  ]


}
