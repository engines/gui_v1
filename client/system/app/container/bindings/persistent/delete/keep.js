app.container.bindings.persistent.delete.keep = type => controller => (a,x) => {

  let name = controller.params.name

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`

  let path = `/-/-/containers/engine/${
    name
  }/services/persistent/none/${
    bindingIdentifier
  }`;

  return [

    app.http(
      path,
      () => controller.open('../../..'),
      {
        method: 'DELETE',
        placeholder: app.hourglass('Deleting binding')
      }
    )

  ]

}
