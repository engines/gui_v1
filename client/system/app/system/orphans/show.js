app.system.orphans.show = controller => (a,x) => {

  let parent = controller.params.parent

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`

  return [

    app.close( controller ),

    a.h3(parent),
    a.h5(`${controller.params.service}:${controller.params.handle}`),

    app.link( {
      label: app.icon( 'fa fa-download', 'Download' ),
      href: `/-/download/binding/${ parent }/${ bindingIdentifier }`,
      target: '_blank',
      class: 'btn app-btn',
    } ),

    a.hr,
    app.float({
      right: app.btn(
        app.icon( 'fas fa-trash', 'Delete' ),
        () => controller.open('delete', controller.query)
      ),
    }),

  ]


}
