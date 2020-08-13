app.container.bindings.persistent.show = type => controller => (a,x) => {

  let name = controller.params.name

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`

  let path = `/-/-/containers/${
    type == 'application' ? 'engine' : 'service'
  }/${ name }/services/persistent/${ bindingIdentifier }`;

  let definitionPath = `/-/-/service_manager/service_definitions/${
    controller.params.publisher
  }/${
    controller.params.type
  }`;

  return [

    app.close( controller ),

    app.float({
      left: app.btn(
        app.icon( 'fas fa-archive', 'Export' ),
        () => controller.open('export', controller.query)
      ),
      right: app.btn(
        app.icon( 'fas fa-database', 'Import' ),
        () => controller.open('import', controller.query)
      ),
    }),

    a.hr,
    app.http(
      [path, definitionPath],
      ([binding, definition], el) => {

        let consumer_params = definition.consumer_params;

        el.$nodes = [

          app.close( controller, {query: controller.query} ),

          app.btn(
            app.icon( 'fa fa-edit', 'Edit' ),
            () => controller.open( 'edit', controller.query )
          ),

          app.report( {
            object: binding,
            report: (r) => [
              r.field( {
                key: 'variables',
                as: 'one',
                label: false,
                report: (rr) => Object.keys(consumer_params).map(
                  (key) => rr.field({
                    key: key,
                    label: consumer_params[key].name,
                    horizontal: true,
                  })
                ),
              } )
            ]
          } ),

        ]
      },
      {
        placeholder: app.hourglass('Loading configuration')
      }
    ),

    a.hr,
    app.float({
      right: app.btn(
        app.icon( 'fas fa-trash', 'Delete' ),
        () => controller.open('delete', controller.query)
      ),
    }),

  ]

}
