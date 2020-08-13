app.container.bindings.persistent.edit = type => controller => (a,x) => {

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

  return a['app-container-binding-edit']([
    a.h5('Edit configuration'),

    app.http([path, definitionPath], ([binding, definition], el) => {

      let consumer_params = definition.consumer_params;

      el.$nodes = [

        app.form( {
          action: `/-/-/containers/engine/${name}/service/persistent/${bindingIdentifier}`,
          success: () => controller.open('..', controller.query),
          object: binding,
          scope: 'api_vars',
          form: (f) => [
            f.field( {
              key: 'variables',
              as: 'one',
              label: false,
              vertical: true,
              form: (ff) => Object.keys(consumer_params).map(
                (key) => [
                  ff.field({
                    key: key,
                    label: consumer_params[key].name,
                    disabled: consumer_params[key].immutable,
                    horizontal: true,
                  })
                ]
              ),
            } ),
            f.buttons(),
          ]
        } ),
      ]
    }),
  ])

}
