app.container.bindings.nonpersistent.registration.reregister = type => controller => (a,x) => {

  let name = controller.params.name;

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`;

  let path = `/-/-/containers/engine/${
    name
  }/service/non_persistent/${bindingIdentifier}/reregister`;

  return app.http(
    path,
    () => controller.open('..', controller.query),
    {
      placeholder: app.hourglass('Reregistering')
    }
  )

}
