app.container.bindings.persistent.export = type => controller => (a,x) => {

  let name = controller.params.name

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`

  return a['app-container-binding']([

    app.close( controller, { query: controller.query } ),

    a.h5('Export data'),

    app.link( {
      label: app.icon( 'fa fa-download', 'Download' ),
      href: `/-/download/binding/${ name }/${ bindingIdentifier }`,
      target: '_blank',
      class: 'btn app-btn',
    } ),

  ])

}
