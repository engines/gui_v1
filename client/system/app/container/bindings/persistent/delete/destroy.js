app.container.bindings.persistent.delete.destroy = type => controller => (a,x) => {

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

    a.p('Are you sure that you want to destroy data?'),

    app.form( {
      url: path,
      method: 'DELETE',
      success: () => controller.open( '../..' ),
      form: f => [
        f.buttons({
          submit: {
            buttonTag: {
              class: 'btn btn-danger'
            }
          }
        }),
      ]
    } ),

  ]

}
