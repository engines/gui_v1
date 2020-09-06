app.container.bindings.persistent.import = type => controller => (a,x) => {

  let name = controller.params.name

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`

  return [

    app.close( controller, { query: controller.query } ),

    a.h5('Import data'),

    x.filepond({filepond: {
      server: {
        url: `/-/upload/service/${ name }/${ bindingIdentifier }`,
        process: {
          headers: {
            'Content-Type': 'application/octet-stream'
          }
        }
      }
    }}),

  ]

}
