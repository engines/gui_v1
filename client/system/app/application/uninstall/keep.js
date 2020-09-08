app.application.uninstall.keep = controller => (a,x) => {

  let name = controller.params.name
  let path = `/-/-/containers/engine/${name}/delete/none`;

  return [

    app.http(
      path,
      () => controller.open('/'),
      {
        method: 'DELETE',
        placeholder: app.hourglass(`Deleting ${name}`)
      }
    )

  ]

}
